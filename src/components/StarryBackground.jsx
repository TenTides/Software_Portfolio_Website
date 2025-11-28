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
    const numStars = 250;

    for (let i = 0; i < numStars; i += 1) {
      stars.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * (Math.max(window.innerWidth, window.innerHeight) * 0.8),
        speed: Math.random() * 0.0005 + 0.0002,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        color: Math.random() > 0.8 ? '#64ffda' : '#ffffff'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        const updatedStar = star;
        updatedStar.angle += updatedStar.speed;
        const x = cx + Math.cos(updatedStar.angle) * updatedStar.radius;
        const y = cy + Math.sin(updatedStar.angle) * updatedStar.radius;

        ctx.beginPath();
        ctx.arc(x, y, updatedStar.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${updatedStar.color === '#64ffda' ? '100, 255, 218' : '200, 210, 230'}, ${updatedStar.opacity})`;
        ctx.fill();

        if (Math.random() > 0.98) {
          updatedStar.opacity = Math.random() * 0.7 + 0.3;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarryBackground;
