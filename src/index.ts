import './styles.css';
import { matIV } from './lib/minMatrix';
import vertexShader from './GLSL/vertex.vert';
import fragmentShader from './GLSL/fragment.frag';


let c: HTMLCanvasElement
let gl: WebGLRenderingContext;

onload = (): void => {
    c = <HTMLCanvasElement>document.getElementById('canvas');
    c.width = 500;
    c.height = 300;

    gl = <WebGLRenderingContext>c.getContext('webgl') || <WebGLRenderingContext>c.getContext('experimental-webgl');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    let vs = createShader(vertexShader, 'vertex');
    let fs = createShader(fragmentShader, 'fragment');
    let pr = createProgram(vs, fs);
};

function createShader(shaderSource: string, type: string): WebGLShader{
    let shader;
    switch(type){
        case 'vertex':
            shader = gl.createShader(gl.VERTEX_SHADER);
            break;
        case 'fragment':
            shader = gl.createShader(gl.FRAGMENT_SHADER);
            break;
        default :
            return;
    }
    // 生成したシェーダーオブジェクトにソースを当ててコンパイル
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    // シェーダが正しくコンパイルされたかチェック
    if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        return shader;
    }else{
        alert(gl.getShaderInfoLog(shader));
    }
}
function createProgram(vs :WebGLShader, fs :WebGLShader): WebGLProgram{
    // プログラムオブジェクトを生成してシェーダーをアタッチ
    let program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    
    // シェーダをリンク
    gl.linkProgram(program);
    // シェーダのリンクが正しく行なわれたかチェック
    if(gl.getProgramParameter(program, gl.LINK_STATUS)){
        // 成功していたらプログラムオブジェクトを有効にする
        gl.useProgram(program);
        return program;
    }else{
        alert(gl.getProgramInfoLog(program));
    }
}