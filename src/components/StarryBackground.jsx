import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = [];
    const shootingStars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i += 1) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.2 + 0.05,
        opacity: Math.random(),
        color: Math.random() > 0.8 ? '#64ffda' : '#8892b0'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const updatedStar = star;
        updatedStar.y -= updatedStar.speed;
        if (updatedStar.y < 0) updatedStar.y = canvas.height;

        ctx.beginPath();
        ctx.arc(updatedStar.x, updatedStar.y, updatedStar.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${updatedStar.color === '#64ffda' ? '100, 255, 218' : '136, 146, 176'}, ${updatedStar.opacity})`;
        ctx.fill();

        if (Math.random() > 0.99) {
          updatedStar.opacity = Math.random();
        }
      });

      if (Math.random() < 0.02) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 2),
          length: Math.random() * 80 + 10,
          speed: Math.random() * 25 + 2,
          angle: Math.PI / 4
        });
      }

      for (let i = 0; i < shootingStars.length; i += 1) {
        const star = shootingStars[i];

        star.x += star.speed * Math.cos(star.angle);
        star.y += star.speed * Math.sin(star.angle);

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(100, 255, 218, 0.8)';
        ctx.lineWidth = 2;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - star.length * Math.cos(star.angle),
          star.y - star.length * Math.sin(star.angle)
        );
        ctx.stroke();

        if (star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          shootingStars.splice(i, 1);
          i -= 1;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40" />;
};

export default StarryBackground;
