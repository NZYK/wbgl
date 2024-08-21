#version 300 es

// パーティクルの初期発生位置。mouse eventから渡す
uniform vec2 origin;
uniform vec2 gravity;
uniform float deltaTime;

in vec2 particlePosition;
in vec2 particleVelocity;
in float particleAge;
in float particleLifeSpan;

// ↓ 処理後は下の変数に入る

out vec2 processedParticlePosition;
out vec2 processedParticleVelocity;
out float processedParticleAge;
out float processedParticleLifeSpan;

void main() {
    // 重力を適用
    processedParticleVelocity = particleVelocity + (gravity * deltaTime);

    // 衝突していたら速度を反転 + 減衰
    if(particlePosition.y < -0.9) {
        processedParticleVelocity.y = -particleVelocity.y * 0.6;
    }
    // 横方向も速度を反転
    if(particlePosition.x < -0.9 || 0.9 < particlePosition.x) {
        processedParticleVelocity.x = -particleVelocity.x;
    }

    // パーティクルのY方向速度がほぼ0になったら初期位置に戻す そうでないときは通常通り移動させるを進める
    if(particlePosition.y < -0.79999 && abs(processedParticleVelocity.y) < 0.000001) {
        processedParticlePosition = origin;
    }
    else {
        processedParticlePosition = particlePosition + (processedParticleVelocity * deltaTime);
    }
}