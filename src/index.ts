import './styles.css';
import vertexShader from './GLSL/vertex.vert';
import fragmentShader from './GLSL/fragment.frag';
import { createProgram, createShader, createBuffer } from './lib/webglUtils';

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
    
    const vertices = new Float32Array([]);
    const indices = new Uint16Array([]);

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
    
    const indexSize = indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, indexSize, gl.UNSIGNED_SHORT, 0);
    gl.flush();
};

// c.addEventListener('mousemove', (e) => {
//     const rect = c.getBoundingClientRect();
//     const x = (e.clientX - rect.left + 1)/c.width;
//     const y = (e.clientY - rect.top + 1)/c.height
//     console.log(`x is ${x}, y is ${y}`);
// });