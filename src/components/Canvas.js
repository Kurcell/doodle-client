import { useEffect, useRef, useState } from "react";
import Stand from "./Stand.js";
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
    contextRef.current.beginPath();
    contextRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);

    const newInstruction =
      instructions.length === 0
        ? `{fn:${canvasFunctions[0]},ex:${e.nativeEvent.offsetX},ey:${e.nativeEvent.offsetY},color:${lineColor},width:${lineWidth}}`
        : `;{fn:${canvasFunctions[0]},ex:${e.nativeEvent.offsetX},ey:${e.nativeEvent.offsetY},color:${lineColor},width:${lineWidth}}`;

    setInstructions((instructions) => instructions + newInstruction);
  };

  // When user stops clicking, pen is lifted
  const endStroke = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    const newInstruction = `;{fn:${
      canvasFunctions[1]
    },ex:${null},ey:${null},color:${null},width:${null}}`;
    setInstructions((instructions) => instructions + newInstruction);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    contextRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    contextRef.current.stroke();

    const newInstruction = `;{fn:${canvasFunctions[2]},ex:${e.nativeEvent.offsetX},ey:${e.nativeEvent.offsetY},color:${lineColor},width:${lineWidth}}`;
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
