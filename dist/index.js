import './styles.css';
import physicsVert from './GLSL/particle/physicsCalc.vert';
import dummyFrag from './GLSL/particle/dummy.frag';
import renderVert from './GLSL/particle/particle-render.vert';
import renderFrag from './GLSL/particle/particle-render.frag';
import { createShader, createProgram, createVAO, createProgramWithFeedback } from './lib/webglUtils';
import { RollingNumArray } from './lib/rollingArray';
var WIDTH = 1600;
var HEIGHT = 900;
var c;
var gl;
var animationFrameId;
var roopParams = {
    computer: 'GPU',
    particleNum: 500,
};
var originPoint = new Float32Array([0.0, 0.0]);
function setup() {
    c = document.getElementById('canvas');
    c.width = WIDTH;
    c.height = HEIGHT;
    gl = c.getContext('webgl2');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // canvasを初期化
    gl.clear(gl.COLOR_BUFFER_BIT);
    c.addEventListener('mousemove', function (e) {
        var rect = c.getBoundingClientRect();
        var x = -1 + 2 * (e.clientX - rect.left + 1) / c.width;
        var y = 1 - 2 * (e.clientY - rect.top + 1) / c.height;
        if (Math.abs(x) < 0.89)
            originPoint[0] = x;
        if (Math.abs(y) < 0.89)
            originPoint[1] = y;
    });
}
function startLoop() {
    if (animationFrameId)
        cancelAnimationFrame(animationFrameId);
    var particleNum = document.getElementById('particle-num');
    var fps = document.getElementById('fps');
    setup();
    var PARTICLE_NUM = roopParams.particleNum;
    var MAX_INITIAL_SPEED = 0.0005;
    var feedbackVaryings = [
        'processedParticlePosition',
        'processedParticleVelocity',
    ];
    var renderVertShader = createShader(gl, renderVert, 'vertex');
    var renderFragShader = createShader(gl, renderFrag, 'fragment');
    var render = createProgram(gl, renderVertShader, renderFragShader);
    var physicsShader = createShader(gl, physicsVert, 'vertex');
    var dummyShader = createShader(gl, dummyFrag, 'fragment');
    var computer = createProgramWithFeedback(gl, physicsShader, dummyShader, feedbackVaryings);
    gl.uniform2fv(gl.getUniformLocation(computer, 'gravity'), new Float32Array([0.0, -0.000001]));
    // vec2     vec2
    // position velocity
    var particleInitialData = [];
    for (var i = 0; i < PARTICLE_NUM; i++) {
        // vec2 position
        particleInitialData.push(originPoint[0]);
        particleInitialData.push(originPoint[1]);
        // vec2 velocity
        var vx = -MAX_INITIAL_SPEED + (Math.random() * (MAX_INITIAL_SPEED * 2));
        var vy = -MAX_INITIAL_SPEED + (Math.random() * (MAX_INITIAL_SPEED * 2));
        particleInitialData.push(vx);
        particleInitialData.push(vy);
    }
    var particleInitialDataF32 = new Float32Array(particleInitialData);
    var inputBuffer = gl.createBuffer();
    var outputBuffer = gl.createBuffer();
    var renderBuffer = gl.createBuffer();
    var computerAttributes = [
        {
            name: 'particlePosition',
            size: 2,
            type: gl.FLOAT,
            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT,
        },
        {
            name: 'particleVelocity',
            size: 2,
            type: gl.FLOAT,
            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT,
        },
    ];
    var STRIDE = computerAttributes.reduce(function (prev, current) { return prev + current.byteSize; }, 0);
    var renderAttributes = [
        {
            name: 'processedParticlePosition',
            size: 2,
            type: gl.FLOAT,
            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT
        }
    ];
    var inputComputerBufferVAO = createVAO(gl, computer, inputBuffer, computerAttributes, STRIDE, particleInitialDataF32, gl.DYNAMIC_COPY);
    var outputComputerBufferVAO = createVAO(gl, computer, outputBuffer, computerAttributes, STRIDE, particleInitialDataF32, gl.DYNAMIC_COPY);
    var inputRenderBufferVAO = createVAO(gl, render, inputBuffer, renderAttributes, STRIDE);
    var outputRenderBufferVAO = createVAO(gl, render, outputBuffer, renderAttributes, STRIDE);
    var transformFeedback = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);
    var buffers = [inputBuffer, outputBuffer];
    var computerVAOs = [inputComputerBufferVAO, outputComputerBufferVAO];
    var renderVAOs = [inputRenderBufferVAO, outputRenderBufferVAO];
    var _a = [0, 1], inputIndex = _a[0], outputIndex = _a[1];
    var fpss = new RollingNumArray(10);
    var prevTime = performance.now();
    function loopGPU(timestamp) {
        var _a;
        var deltaTime = timestamp - prevTime;
        prevTime = timestamp;
        fpss.add(Math.round(1000 / deltaTime));
        fps.textContent = "".concat(fpss.getAverage(), "FPS");
        particleNum.textContent = "".concat(PARTICLE_NUM);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(computer);
        gl.enable(gl.RASTERIZER_DISCARD);
        gl.uniform2fv(gl.getUniformLocation(computer, 'origin'), originPoint);
        gl.uniform1f(gl.getUniformLocation(computer, 'deltaTime'), deltaTime);
        gl.bindVertexArray(computerVAOs[inputIndex]);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffers[outputIndex]);
        gl.beginTransformFeedback(gl.POINTS);
        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);
        gl.endTransformFeedback();
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        gl.useProgram(render);
        gl.disable(gl.RASTERIZER_DISCARD);
        gl.bindVertexArray(renderVAOs[outputIndex]);
        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);
        _a = [outputIndex, inputIndex], inputIndex = _a[0], outputIndex = _a[1];
        animationFrameId = requestAnimationFrame(function (timestamp) { return loopGPU(timestamp); });
    }
    var particleData = particleInitialData;
    function loopCPU(timestamp) {
        var _a;
        var deltaTime = timestamp - prevTime;
        prevTime = timestamp;
        fpss.add(Math.round(1000 / deltaTime));
        fps.textContent = "".concat(fpss.getAverage(), "FPS");
        particleNum.textContent = "".concat(PARTICLE_NUM);
        // 演算
        for (var i = 0; i < particleData.length; i += 4) {
            var x = particleData[i];
            var y = particleData[i + 1];
            var vx = particleData[i + 2];
            var vy = particleData[i + 3];
            var px = void 0, py = void 0;
            // 重力を適用
            var pvx = vx;
            var pvy = vy + -0.000001 * deltaTime;
            // 衝突していたら速度を反転 + 減衰
            if (y < -0.9) {
                pvy = -vy * 0.6;
            }
            // 横方向も速度を反転
            if (x < -0.9 || 0.9 < x) {
                pvx = -vx;
            }
            // パーティクルのY方向速度がほぼ0になったら初期位置に戻す そうでないときは通常通り移動させるを進める
            if (y < -0.79999 && Math.abs(pvy) < 0.000001) {
                px = originPoint[0];
                py = originPoint[1];
            }
            else {
                px = x + pvx * deltaTime;
                py = y + pvy * deltaTime;
            }
            particleData[i] = px;
            particleData[i + 1] = py;
            particleData[i + 2] = pvx;
            particleData[i + 3] = pvy;
        }
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(render);
        gl.disable(gl.RASTERIZER_DISCARD);
        gl.bindBuffer(gl.ARRAY_BUFFER, renderBuffer);
        var location = gl.getAttribLocation(render, 'processedParticlePosition');
        gl.vertexAttribPointer(location, 2, gl.FLOAT, false, STRIDE, 0);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particleData), gl.STATIC_DRAW);
        gl.bindVertexArray(renderVAOs[outputIndex]);
        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);
        _a = [outputIndex, inputIndex], inputIndex = _a[0], outputIndex = _a[1];
        animationFrameId = requestAnimationFrame(function (timestamp) { return loopCPU(timestamp); });
    }
    if (roopParams.computer === 'GPU')
        animationFrameId = requestAnimationFrame(function (timestamp) { return loopGPU(timestamp); });
    if (roopParams.computer === 'CPU')
        animationFrameId = requestAnimationFrame(function (timestamp) { return loopCPU(timestamp); });
}
onload = function () {
    startLoop();
};
document.getElementById('restartBtn').addEventListener('click', function () {
    var select = document.getElementById('computer');
    var particle_bumber = document.getElementById('particles');
    roopParams = {
        computer: select.value,
        particleNum: parseInt(particle_bumber.value)
    };
    originPoint = new Float32Array([0.0, 0.0]);
    startLoop(); // ループを再起動
});
