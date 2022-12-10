import { useEffect, useRef, useState } from "react";
import { stroke } from "../util/drawing";

const Doodle = ({ instructions }) => {
  const canvasRef = useRef(null);
  const doodleRef = useRef(instructions[0]);
  const [context, setContext] = useState(null);

  const size = { width: 500, height: 500 };

  const draw = (animationFrame) => {
    doodleRef.current = instructions[animationFrame];

    stroke(
      doodleRef.current.fn,
      context,
      doodleRef.current.ex,
      doodleRef.current.ey
    );
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = 1;
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    let frameCount = 0;
    let animationFrameId;

    if (context) {
      const render = () => {
        frameCount = frameCount + 1 >= instructions.length ? 0 : frameCount + 1;
        if (frameCount === 0) context.clearRect(0, 0, size.width, size.height);
        const ctx = canvasRef.current.getContext("2d");
        ctx.strokeStyle = doodleRef.current.color;
        ctx.lineWidth = doodleRef.current.width;
        setContext(ctx);
        draw(frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, context]);

  return <canvas {...size} ref={canvasRef} />;
};

export default Doodle;
