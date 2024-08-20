import './styles.css';
import vertexShader from './GLSL/vertex.vert';
import fragmentShader from './GLSL/fragment.frag';
import { createProgram, createShader, createBuffer } from './lib/webglUtils';
import { mat4, vec3 } from 'gl-matrix';

const WIDTH = 500;
const HEIGHT = 500;
var c: HTMLCanvasElement
var gl: WebGLRenderingContext;

function setupWebGL() {
    c = <HTMLCanvasElement>document.getElementById('canvas');
    c.width = WIDTH;
    c.height = HEIGHT;
    gl = <WebGLRenderingContext>c.getContext('webgl2');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // canvasを初期化する際の深度を設定する
    gl.clearDepth(1.0);
    // canvasを初期化
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

onload = (): void => {
    setupWebGL();
    var v_shader: WebGLShader = createShader(gl, vertexShader, 'vertex');
    var f_shader: WebGLShader = createShader(gl, fragmentShader, 'fragment');
    var program: WebGLProgram = createProgram(gl, v_shader, f_shader);

    // 設定の有効化
    gl.enable(gl.DEPTH_TEST);
    // gl.enable(gl.CULL_FACE);

    //
    // uniform変数の設定
    //
    const model = mat4.create();
    mat4.identity(model);

    const cameraPosition = new Float32Array([0, 60, 90]);
    const lookAtPosition = new Float32Array([0, 0, 0]);
    const upDirection    = new Float32Array([0, 1, 0]);
    const view  = mat4.create();
    mat4.lookAt(view, cameraPosition, lookAtPosition, upDirection);

    const fovY = 60 * Math.PI / 180;
    const aspect = 500 / 500;
    const near = 30;
    const far  = 300;
    const projection = mat4.create();
    mat4.perspective(projection, fovY, aspect, near, far);

    const modelLocation      = gl.getUniformLocation(program, 'model');
    const viewLocation       = gl.getUniformLocation(program, 'view');
    const projectionLocation = gl.getUniformLocation(program, 'projection');
    gl.uniformMatrix4fv(modelLocation, false, model);
    gl.uniformMatrix4fv(projectionLocation, false, projection);
    
    const vertices = new Float32Array([
        -30.0, 30.0, 0.0,  // 座標
        0.0, 1.0, 0.0, 1.0,      // 色
        -30.0, -30.0, 0.0,
        1.0, 0.0, 0.0, 1.0,
        30.0, 30.0, 0.0,
        1.0, 0.0, 0.0, 1.0,
        30.0, -30.0, 0.0,
        0.0, 0.0, 1.0, 1.0
    ]);
    const indices = new Uint16Array([0, 1, 2, 1, 3, 2]);

    const vertexBuffer = createBuffer(gl, gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const indexBuffer = createBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const vertexPositionAttribLocation = gl.getAttribLocation(program, 'position');
    const vertexColorAttribLocation = gl.getAttribLocation(program, 'color');

    const POSITION_SIZE = 3; // vec3
    const COLOR_SIZE  = 4; // vec4

    const STRIDE = (POSITION_SIZE + COLOR_SIZE) * Float32Array.BYTES_PER_ELEMENT;
    const POSITION_OFFSET = 0;
    const COLOR_OFFSET = POSITION_SIZE * Float32Array.BYTES_PER_ELEMENT;

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.enableVertexAttribArray(vertexPositionAttribLocation);
    gl.enableVertexAttribArray(vertexColorAttribLocation);

    gl.vertexAttribPointer(vertexPositionAttribLocation, POSITION_SIZE, gl.FLOAT, false, STRIDE, POSITION_OFFSET);
    gl.vertexAttribPointer(vertexColorAttribLocation, COLOR_SIZE, gl.FLOAT, false, STRIDE, COLOR_OFFSET);
    
    const radius = 100;
    let radian = 0;

    const indexSize = indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    let prevTime = Date.now();
    function draw() {
        const currentTime = Date.now();
        const deltaTime = currentTime - prevTime;
        prevTime = currentTime;
        radian += deltaTime/20 * Math.PI /180;
        const cameraPosition = new Float32Array([Math.sin(radian)*radius, 50.0, Math.cos(radian)*radius]);
        const lookAtPosition = new Float32Array([0,0,0]);
        const upDirection = new Float32Array([0.0, 1.0, 0.0]);
        const view = mat4.create();
        mat4.lookAt(view, cameraPosition, lookAtPosition, upDirection);
        gl.uniformMatrix4fv(viewLocation, false, view);

        // 前フレームの内容をクリアします。
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawElements(gl.TRIANGLES, indexSize, gl.UNSIGNED_SHORT, 0);
        gl.flush();
        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
};

// c.addEventListener('mousemove', (e) => {
//     const rect = c.getBoundingClientRect();
//     const x = (e.clientX - rect.left + 1)/c.width;
//     const y = (e.clientY - rect.top + 1)/c.height
//     console.log(`x is ${x}, y is ${y}`);
// });