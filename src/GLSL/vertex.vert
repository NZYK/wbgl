#version 300 es

in vec3 position;
in vec4 color;

out vec4 vColor;
void main() {
    vColor = color;
    gl_Position = vec4(position, 1.0);
}