<template>
  <div class="particle-canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      mouse: {
        x: null,
        y: null,
        radius: 0
      },  
      particleArray: [],
      particleDensity: 9000
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.mouse.radius = (this.canvas.height / 80) * (this.canvas.width / 80);
    this.init();
    this.animate();

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseout', this.handleMouseOut);
  },
  methods: {
    handleResize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.mouse.radius = (this.canvas.height / 80) * (this.canvas.width / 80);
      this.init();
    },
    handleMouseMove(event) {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    },
    handleMouseOut() {
      this.mouse.x = null;
      this.mouse.y = null;
    },
    init() {
      this.particleArray = [];

      let numberOfParticles = (this.canvas.height * this.canvas.width) / this.particleDensity;
      for (let i = 0; i < numberOfParticles*0.55; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.8) - 2.5;
        let directionY = (Math.random() * 0.8) - 2.5;
        let color = '#27272A';

        this.particleArray.push({ x, y, directionX, directionY, size, color });
      }
    },
    connect() {
      for (let a = 0; a < this.particleArray.length; a++) {
        for (let b = a; b < this.particleArray.length; b++) {
          let dx = this.particleArray[a].x - this.particleArray[b].x;
          let dy = this.particleArray[a].y - this.particleArray[b].y;
          let distanceSq = dx * dx + dy * dy;
          if (distanceSq < 10000) {
            this.ctx.strokeStyle = '#27272A';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particleArray[a].x, this.particleArray[a].y);
            this.ctx.lineTo(this.particleArray[b].x, this.particleArray[b].y);
            this.ctx.stroke();
          }
        }
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < this.particleArray.length; i++) {
        let p = this.particleArray[i];
        p.x += p.directionX;
        p.y += p.directionY;

        if (p.x > this.canvas.width || p.x < 0) {
          p.directionX = -p.directionX;
        }
        if (p.y > this.canvas.height || p.y < 0) {
          p.directionY = -p.directionY;
        }

        let dx = this.mouse.x - p.x;
        let dy = this.mouse.y - p.y;
        let distanceSq = dx * dx + dy * dy;
        if (distanceSq < this.mouse.radius * this.mouse.radius) {
          if (this.mouse.x < p.x && p.x < this.canvas.width - p.size * 10) {
            p.x += 10;
          }
          if (this.mouse.x > p.x && p.x > p.size * 10) {
            p.x -= 10;
          }
          if (this.mouse.y < p.y && p.y < this.canvas.height - p.size * 10) {
            p.y += 10;
          }
          if (this.mouse.y > p.y && p.y > p.size * 10) {
            p.y -= 10;
          }
        }

      
      }
      this.connect();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseout', this.handleMouseOut);
  }
};
</script>

<style scoped>
.particle-canvas {
  position: relative;
  width: 100%;
  height: 100%;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
  