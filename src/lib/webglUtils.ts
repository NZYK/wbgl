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

// バッファを作成して初期化する
export function createBuffer(
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    bufferType: GLenum,
    dataArray: Float32Array | Uint16Array | null,
    drawType: GLenum
): WebGLBuffer | null{
    const buffer = gl.createBuffer();
    if (!buffer) throw new Error("Failed to create buffer");
    gl.bindBuffer(bufferType, buffer);
    // データのイニシャライズ
    if (dataArray) gl.bufferData(bufferType, dataArray, drawType);
    gl.bindBuffer(bufferType, null);
    return buffer;
}

