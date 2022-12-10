import { useEffect, useRef, useState } from "react";
import Stand from "./Stand.js";
import { stroke } from "../util/drawing";

const canvasFunctions = ["startStroke", "endStroke", "draw"];

const Canvas = ({ lineWidth, lineColor, instructions, setInstructions }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // Initial context for canvas
  const [isDrawing, setIsDrawing] = useState(false);

  // Instruction Context

  // Canvas initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    context.globalAlpha = 1;
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    contextRef.current = context;
  }, [lineColor, lineWidth]);

  // When user clicks, "ink" is deposited
  const startStroke = (e) => {
    stroke(
      canvasFunctions[0],
      contextRef.current,
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);

    const newInstruction =
      instructions.length === 0
        ? `{"fn":"${canvasFunctions[0]}","ex":${e.nativeEvent.offsetX},"ey":${e.nativeEvent.offsetY},"color":"${lineColor}","width":${lineWidth}}`
        : `;{"fn":"${canvasFunctions[0]}","ex":${e.nativeEvent.offsetX},"ey":${e.nativeEvent.offsetY},"color":"${lineColor}","width":${lineWidth}}`;

    setInstructions((instructions) => instructions + newInstruction);
  };

  // When user stops clicking, pen is lifted
  const endStroke = () => {
    stroke(canvasFunctions[1], contextRef.current, null, null);
    setIsDrawing(false);
    const newInstruction = `;{"fn":"${
      canvasFunctions[1]
    }","ex":${null},"ey":${null},"color":${null},"width":${null}}`;

    setInstructions((instructions) => instructions + newInstruction);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    stroke(
      canvasFunctions[2],
      contextRef.current,
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    const newInstruction = `;{"fn":"${canvasFunctions[2]}","ex":${e.nativeEvent.offsetX},"ey":${e.nativeEvent.offsetY},"color":"${lineColor}","width":${lineWidth}}`;
    setInstructions((instructions) => instructions + newInstruction);
  };

  return (
    <Stand>
      <canvas
        onMouseDown={startStroke}
        onMouseUp={endStroke}
        onMouseMove={draw}
        ref={canvasRef}
        width={`500px`}
        height={`500px`}
      />
    </Stand>
  );
};

export default Canvas;
