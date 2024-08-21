#version 300 es

in vec2 processedParticlePosition;

void main() {
    gl_PointSize = 2.0;
    gl_Position = vec4(processedParticlePosition, 0.0, 1.0);
}