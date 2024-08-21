// shaderをソースから作成し、コンパイルして返す
export function createShader(gl, shaderSource, shaderType) {
    var shader;
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
    if (!shader)
        throw new Error("Failed to create shader");
    // 生成したシェーダーオブジェクトにソースを当ててコンパイル
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    // シェーダが正しくコンパイルされたかチェック
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
    }
    else {
        alert(gl.getShaderInfoLog(shader));
    }
}
// プログラムオブジェクトを作成し、vertex_shader、fragment_shaderをアタッチして返す
export function createProgram(gl, vertexShader, fragmentShader) {
    // プログラムオブジェクトを生成してシェーダーをアタッチ
    var program = gl.createProgram();
    if (!program)
        throw new Error("Failed to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // シェーダをリンク
    gl.linkProgram(program);
    // シェーダのリンクが正しく行なわれたかチェック
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        return program;
    }
    else {
        alert(gl.getProgramInfoLog(program));
    }
}
// TransformFeedbackはWebGL2でしか使えないので注意
export function createProgramWithFeedback(gl, vertexShader, fragmentShader, feedbackVaryings) {
    if (feedbackVaryings === void 0) { feedbackVaryings = []; }
    var program = gl.createProgram();
    if (!program)
        throw new Error("Failed to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // ここでトランスフォームフィードバックを使用することを宣言
    if (feedbackVaryings.length !== 0) {
        gl.transformFeedbackVaryings(program, feedbackVaryings, gl.INTERLEAVED_ATTRIBS);
    }
    gl.linkProgram(program);
    // シェーダのリンクが正しく行なわれたかチェック
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        return program;
    }
    else {
        alert(gl.getProgramInfoLog(program));
    }
}
// バッファを作成して初期化する
export function createBuffer(gl, bufferType, dataArray, usage) {
    if (dataArray === void 0) { dataArray = null; }
    if (usage === void 0) { usage = gl.STATIC_DRAW; }
    var buffer = gl.createBuffer();
    if (!buffer)
        throw new Error("Failed to create buffer");
    gl.bindBuffer(bufferType, buffer);
    // データのイニシャライズ
    if (dataArray)
        gl.bufferData(bufferType, dataArray, usage);
    gl.bindBuffer(bufferType, null);
    return buffer;
}
// VertexAttributeが多くなると管理が煩雑になるのでこれをVAOでまとめる
// VAOはwebGL2からの機能なのでここでは gl: WebGL2RenderingContextとする
export function createVAO(gl, program, buffer, attributes, stride, dataArray, usage) {
    if (dataArray === void 0) { dataArray = null; }
    if (usage === void 0) { usage = gl.STATIC_DRAW; }
    var vao = gl.createVertexArray();
    if (!vao)
        throw new Error("Failed to create vao");
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    var offset = 0;
    for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
        var attribute = attributes_1[_i];
        var attrLocation = gl.getAttribLocation(program, attribute.name);
        gl.enableVertexAttribArray(attrLocation);
        gl.vertexAttribPointer(attrLocation, attribute.size, attribute.type, false, stride, offset);
        offset += attribute.byteSize;
    }
    if (dataArray !== null) {
        gl.bufferData(gl.ARRAY_BUFFER, dataArray, usage);
    }
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vao;
}
