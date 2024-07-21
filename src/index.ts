import './styles.css';
let c: HTMLCanvasElement
let gl: WebGLRenderingContext;

onload = (): void => {
    c = <HTMLCanvasElement>document.getElementById('canvas');
    c.width = 500;
    c.height = 300;

    gl = <WebGLRenderingContext>c.getContext('webgl') || <WebGLRenderingContext>c.getContext('experimental-webgl');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};
