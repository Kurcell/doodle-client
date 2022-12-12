import { useEffect, useRef, useState } from "react";
import { stroke } from "../util/drawing";

const Doodle = ({ instructions }) => {
  const [instructionsState, setInstructionState] = useState(instructions);
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  const size = { width: 500, height: 500 };

  useEffect(() => {
    if (context) context.clearRect(0, 0, size.width, size.height);
    setInstructionState(instructions);
  }, [instructions]);

  const draw = (animationFrame) => {
    stroke(
      instructionsState[animationFrame].fn,
      context,
      instructionsState[animationFrame].ex,
      instructionsState[animationFrame].ey
    );
  };

  useEffect(() => {
    if (instructionsState && canvasRef.current) {
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

    if (instructionsState.length > 0 && context) {
      const render = () => {
        if (frameCount === 0) context.clearRect(0, 0, size.width, size.height);
        const ctx = canvasRef.current.getContext("2d");
        ctx.strokeStyle = instructionsState[frameCount].color;
        ctx.lineWidth = instructionsState[frameCount].width;
        setContext(ctx);
        draw(frameCount);
        animationFrameId = window.requestAnimationFrame(render);
        frameCount =
          frameCount + 1 >= instructionsState.length ? 0 : frameCount + 1;
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context, instructionsState]);

  return <canvas {...size} ref={canvasRef} />;
};

export default Doodle;
