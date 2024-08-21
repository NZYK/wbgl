import './styles.css';
import physicsVert from './GLSL/particle/physicsCalc.vert'
import dummyFrag from './GLSL/particle/dummy.frag'
import renderVert from './GLSL/particle/particle-render.vert'
import renderFrag from './GLSL/particle/particle-render.frag'
import { createShader, createProgram, createBuffer, createVAO, createProgramWithFeedback } from './lib/webglUtils';
import { RollingNumArray } from './lib/rollingArray';

const WIDTH = 1600;
const HEIGHT = 900;
let c: HTMLCanvasElement
let gl: WebGL2RenderingContext;

let animationFrameId: number;
let roopParams = {
    computer: 'GPU',
    particleNum: 500,
}
let originPoint = new Float32Array([0.0, 0.0]);

function setup() {
    c = <HTMLCanvasElement>document.getElementById('canvas');
    c.width = WIDTH;
    c.height = HEIGHT;
    gl = c.getContext('webgl2');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // canvasを初期化
    gl.clear(gl.COLOR_BUFFER_BIT);
    c.addEventListener('mousemove', (e) => {
        const rect = c.getBoundingClientRect();
        const x = -1 + 2*(e.clientX - rect.left + 1)/c.width;
        const y = 1 - 2*(e.clientY - rect.top + 1)/c.height
        if (Math.abs(x) < 0.89) originPoint[0] = x;
        if (Math.abs(y) < 0.89) originPoint[1] = y;
    });
}
function startLoop () {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    const particleNum = <HTMLSpanElement>document.getElementById('particle-num');
    const fps = <HTMLSpanElement>document.getElementById('fps');
    setup();
    const PARTICLE_NUM = roopParams.particleNum;
    const MAX_INITIAL_SPEED = 0.0005;
    const feedbackVaryings = [
        'processedParticlePosition',
        'processedParticleVelocity',
    ]

    const renderVertShader = createShader(gl, renderVert, 'vertex');
    const renderFragShader = createShader(gl, renderFrag, 'fragment');
    const render = createProgram(gl, renderVertShader, renderFragShader);

    const physicsShader = createShader(gl, physicsVert, 'vertex');
    const dummyShader = createShader(gl, dummyFrag, 'fragment');
    const computer = createProgramWithFeedback(gl, physicsShader, dummyShader, feedbackVaryings);
    gl.uniform2fv(gl.getUniformLocation(computer, 'gravity'), new Float32Array([0.0, -0.000001]));

    // vec2     vec2
    // position velocity
    const particleInitialData: Array<number> = [];
    for (let i = 0; i < PARTICLE_NUM; i++) {
        // vec2 position
        particleInitialData.push(originPoint[0]);
        particleInitialData.push(originPoint[1]);
        // vec2 velocity
        const vx = -MAX_INITIAL_SPEED + (Math.random() * (MAX_INITIAL_SPEED * 2));
        const vy = -MAX_INITIAL_SPEED + (Math.random() * (MAX_INITIAL_SPEED * 2));
        particleInitialData.push(vx);
        particleInitialData.push(vy);
    }
    const particleInitialDataF32 = new Float32Array(particleInitialData);

    const inputBuffer = gl.createBuffer();
    const outputBuffer = gl.createBuffer();

    const renderBuffer = gl.createBuffer();

    const computerAttributes = [
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
    const STRIDE = computerAttributes.reduce((prev, current) => prev + current.byteSize, 0);
    const renderAttributes = [
        {
            name: 'processedParticlePosition',
            size: 2,
            type: gl.FLOAT,
            byteSize: 2 * Float32Array.BYTES_PER_ELEMENT
        }
    ];
    const inputComputerBufferVAO = createVAO(gl, computer, inputBuffer, computerAttributes, STRIDE, particleInitialDataF32, gl.DYNAMIC_COPY);
    const outputComputerBufferVAO = createVAO(gl, computer, outputBuffer, computerAttributes, STRIDE, particleInitialDataF32, gl.DYNAMIC_COPY);
    const inputRenderBufferVAO = createVAO(gl, render, inputBuffer, renderAttributes, STRIDE);
    const outputRenderBufferVAO = createVAO(gl, render, outputBuffer, renderAttributes, STRIDE);

    const transformFeedback = gl.createTransformFeedback();
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);

    const buffers = [inputBuffer, outputBuffer];
    const computerVAOs = [inputComputerBufferVAO, outputComputerBufferVAO];
    const renderVAOs = [inputRenderBufferVAO, outputRenderBufferVAO];
    let [inputIndex, outputIndex] = [0, 1];

    const fpss =  new RollingNumArray(10);

    let prevTime = performance.now();
    function loopGPU(timestamp: number): void {
        const deltaTime = timestamp - prevTime;
        prevTime = timestamp;
        fpss.add(Math.round(1000/deltaTime));
        fps.textContent = `${fpss.getAverage()}FPS`;
        particleNum.textContent = `${PARTICLE_NUM}`;

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

        [inputIndex, outputIndex] = [outputIndex, inputIndex];

        animationFrameId = requestAnimationFrame((timestamp) => loopGPU(timestamp));
    }
    let particleData = particleInitialData;
    function loopCPU(timestamp: number): void {
        const deltaTime = timestamp - prevTime;
        prevTime = timestamp;
        fpss.add(Math.round(1000/deltaTime));
        fps.textContent = `${fpss.getAverage()}FPS`;
        particleNum.textContent = `${PARTICLE_NUM}`;

        // 演算
        for (let i = 0; i < particleData.length; i += 4) {
            let x = particleData[i];
            let y = particleData[i+1];
            let vx = particleData[i+2];
            let vy = particleData[i+3];
            let px, py;

            // 重力を適用
            let pvx = vx;
            let pvy = vy + -0.000001 * deltaTime;

            // 衝突していたら速度を反転 + 減衰
            if(y < -0.9) {
                pvy =  -vy * 0.6;
            }
            // 横方向も速度を反転
            if(x < -0.9 || 0.9 < x) {
                pvx = -vx;
            }

            // パーティクルのY方向速度がほぼ0になったら初期位置に戻す そうでないときは通常通り移動させるを進める
            if(y < -0.79999 && Math.abs(pvy) < 0.000001){
                px = originPoint[0];
                py = originPoint[1];
            } else {
                px = x + pvx * deltaTime; 
                py = y + pvy * deltaTime;
            }

            particleData[i] = px;
            particleData[i+1] = py;
            particleData[i+2] = pvx;
            particleData[i+3] = pvy;
        }

        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(render);
        gl.disable(gl.RASTERIZER_DISCARD);

        gl.bindBuffer(gl.ARRAY_BUFFER, renderBuffer);
        const location = gl.getAttribLocation(render, 'processedParticlePosition');
        gl.vertexAttribPointer(location, 2, gl.FLOAT, false, STRIDE, 0);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particleData), gl.STATIC_DRAW);
        
        gl.bindVertexArray(renderVAOs[outputIndex]);
        gl.drawArrays(gl.POINTS, 0, PARTICLE_NUM);

        [inputIndex, outputIndex] = [outputIndex, inputIndex];

        animationFrameId = requestAnimationFrame((timestamp) => loopCPU(timestamp));
    }
    if (roopParams.computer === 'GPU') animationFrameId = requestAnimationFrame((timestamp) => loopGPU(timestamp));
    if (roopParams.computer === 'CPU') animationFrameId = requestAnimationFrame((timestamp) => loopCPU(timestamp));
}
onload = (): void => {
    startLoop();
}

document.getElementById('restartBtn').addEventListener('click', () => {
    const select = <HTMLSelectElement>document.getElementById('computer');
    const particle_bumber = <HTMLInputElement>document.getElementById('particles');
    roopParams = {
        computer: select.value,
        particleNum: parseInt(particle_bumber.value)
    }
    originPoint = new Float32Array([0.0, 0.0]);
    startLoop();      // ループを再起動
});