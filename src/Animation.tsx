import { useEffect, useRef } from "react";

function Clip(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const INITIAL_WIDTH = (canvas.width = canvas.parentElement!.clientWidth);
    const INITIAL_HEIGHT = (canvas.height = canvas.parentElement!.clientHeight);
    const NR_POINTS = 10;
    const CUTOFF_DISTANCE = 300;

    const points: number[][] = [];
    const directions: number[][] = [];

    for (let i = 0; i < NR_POINTS; i++) {
      const x = Math.random() * INITIAL_WIDTH;
      const y = Math.random() * INITIAL_HEIGHT;
      points.push([x, y]);
      directions.push([Math.random() * 2 - 1, Math.random() * 2 - 1]);
    }

    const draw = () => {
      const WIDTH = (canvas.width = canvas.parentElement!.clientWidth);
      const HEIGHT = (canvas.height = canvas.parentElement!.clientHeight);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      for (let i = 0; i < NR_POINTS; i++) {
        let [x, y] = points[i];
        let [dx, dy] = directions[i];

        if (x < 0 || x > WIDTH) {
          dx = -dx;
          x = Clip(x, 0, WIDTH);
        }
        if (y < 0 || y > HEIGHT) {
          dy = -dy;
          y = Clip(y, 0, HEIGHT);
        }

        x += dx;
        y += dy;

        points[i] = [x, y];
        directions[i] = [dx, dy];

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#555";
        ctx.fill();
      }

      for (let i = 0; i < NR_POINTS; i++) {
        for (let j = i + 1; j < NR_POINTS; j++) {
          const distance = Math.sqrt(
            Math.pow(points[i][0] - points[j][0], 2) +
              Math.pow(points[i][1] - points[j][1], 2),
          );

          if (distance < CUTOFF_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(points[i][0], points[i][1]);
            ctx.lineTo(points[j][0], points[j][1]);

            const coeficient = 1 - distance / CUTOFF_DISTANCE;
            const alpha = Math.pow(coeficient, 0.5);

            ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
