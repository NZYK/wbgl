// shaderをソースから作成し、コンパイルして返す
export function createShader(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    shaderSource: string,
    shaderType: string
): WebGLShader | null{
    let shader;
    switch (shaderType) {
        case 'vertex':
            shader = gl.createShader(gl.VERTEX_SHADER);
            break;
        case 'fragment':
            shader = gl.createShader(gl.FRAGMENT_SHADER);
            break;
        default:
            return;
    }
    if (!shader) throw new Error("Failed to create shader");
    // 生成したシェーダーオブジェクトにソースを当ててコンパイル
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    // シェーダが正しくコンパイルされたかチェック
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
    } else {
        alert(gl.getShaderInfoLog(shader));
    }
}

// プログラムオブジェクトを作成し、vertex_shader、fragment_shaderをアタッチして返す
export function createProgram(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
): WebGLProgram | null{
    // プログラムオブジェクトを生成してシェーダーをアタッチ
    let program = gl.createProgram();
    if (!program) throw new Error("Failed to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // シェーダをリンク
    gl.linkProgram(program);
    // シェーダのリンクが正しく行なわれたかチェック
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        return program;
    } else {
        alert(gl.getProgramInfoLog(program));
    }
}
// TransformFeedbackはWebGL2でしか使えないので注意
export function createProgramWithFeedback(
    gl: WebGL2RenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader,
    feedbackVaryings: Array<string> = []
): WebGLProgram | null{
    let program = gl.createProgram();
    if (!program) throw new Error("Failed to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // ここでトランスフォームフィードバックを使用することを宣言
    if(feedbackVaryings.length !== 0) {
        gl.transformFeedbackVaryings(program, feedbackVaryings, gl.INTERLEAVED_ATTRIBS);
    }

    gl.linkProgram(program);
    // シェーダのリンクが正しく行なわれたかチェック
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        return program;
    } else {
        alert(gl.getProgramInfoLog(program));
    }
}

// バッファを作成して初期化する
export function createBuffer(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    bufferType: GLenum,
    dataArray: Float32Array | Uint16Array | null = null,
    usage: GLenum = gl.STATIC_DRAW
): WebGLBuffer | null{
    const buffer = gl.createBuffer();
    if (!buffer) throw new Error("Failed to create buffer");
    gl.bindBuffer(bufferType, buffer);
    // データのイニシャライズ
    if (dataArray) gl.bufferData(bufferType, dataArray, usage);
    gl.bindBuffer(bufferType, null);
    return buffer;
}

export type WebGLAttributes = Array<WebGLAttribute>;
export type WebGLAttribute = {
    name: string;
    size: number;
    type: GLenum;
    byteSize: number;
};

// VertexAttributeが多くなると管理が煩雑になるのでこれをVAOでまとめる
// VAOはwebGL2からの機能なのでここでは gl: WebGL2RenderingContextとする
export function createVAO(
    gl: WebGL2RenderingContext,
    program: WebGLProgram,
    buffer: WebGLBuffer,
    attributes: WebGLAttributes,
    stride: number,
    dataArray: Float32Array | Uint16Array | null = null,
    usage: GLenum = gl.STATIC_DRAW
) {
    const vao = gl.createVertexArray();
    if (!vao) throw new Error("Failed to create vao");
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    let offset = 0;
    for(const attribute of attributes) {
        const attrLocation = gl.getAttribLocation(program, attribute.name);
        gl.enableVertexAttribArray(attrLocation);
        gl.vertexAttribPointer(attrLocation, attribute.size, attribute.type, false, stride, offset);
        offset += attribute.byteSize;
    }

    if(dataArray !== null) {
        gl.bufferData(gl.ARRAY_BUFFER, dataArray, usage);
    }

    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vao;
}