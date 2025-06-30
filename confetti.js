function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];

  const colors = ["#ff4081", "#ffd700", "#00e5ff", "#ab47bc", "#66bb6a"];

  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      w: Math.random() * 8 + 4,       // width for rectangles
      h: Math.random() * 8 + 4,       // height for rectangles
      r: Math.random() * 6 + 3,       // radius for circles
      d: Math.random() * 3 + 2,       // falling speed
      tilt: Math.random() * 10 - 5,
      angle: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? "circle" : "rect"
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });
  }

  function updateConfetti() {
    confetti.forEach(p => {
      p.y += p.d;
      p.x += Math.sin(p.angle) * 1.5;
      p.angle += 0.02;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
        p.d = Math.random() * 3 + 2;
      }
    });
  }

  function animate() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animate);
  }

  animate();
}
