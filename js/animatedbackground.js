const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let interval

function animate() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   const w = canvas.width;
   const h = canvas.height;
   ctx.strokeStyle = 'rgba(174,194,224,0.5)';
   ctx.lineWidth = 1;
   ctx.lineCap = 'round';

   const init = [];
   const maxParts = 40;
   for (let a = 0; a < maxParts; a++) {
      init.push({
         x: Math.random() * w,
         y: Math.random() * h,
         l: Math.random() * 1,
         xs: -4 + Math.random() * 4 + 2,
         ys: Math.random() * 10 + 10
      })
   }

   const particles = [];
   for (let b = 0; b < maxParts; b++) {
      particles[b] = init[b];
   }

   function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let c = 0; c < particles.length; c++) {
         const p = particles[c];
         ctx.beginPath();
         ctx.moveTo(p.x, p.y);
         ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
         ctx.stroke();
      }
      move();
   }

   function move() {
      for (let b = 0; b < particles.length; b++) {
         const p = particles[b];
         p.x += p.xs;
         p.y += p.ys;
         if (p.x > w || p.y > h) {
            p.x = Math.random() * w;
            p.y = -20;
         }
      }
   }

   interval = setInterval(draw, 30);

}

window.onload = animate
window.onresize = function () {
   if (interval) {
      this.clearInterval(interval)
   }
   ctx.clearRect(0, 0, canvas.height, canvas.width)
   this.animate()
}