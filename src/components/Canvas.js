import Paper from '@mui/material/Paper';
import {Box} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import CanvasDrawer from "./CanvasDrawer";

const canvasFunctions = ["startStroke", "endStroke", "draw"]

const Canvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    // Initial context for canvas
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("#000000");
    const [lineOpacity, setLineOpacity] = useState(0.1);

    // Instruction Context
    const [instructions, setInstructions] = useState([]);

    // Canvas initialization
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.lineJoin = "round";
        context.globalAlpha = lineOpacity;
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        contextRef.current = context;
    }, [lineColor, lineOpacity, lineWidth]);

    // When user clicks, "ink" is deposited
    const startStroke = (e) => {
        contextRef.current.beginPath();
        contextRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true);
        setInstructions(
        [...instructions,
                {
                    "fn": canvasFunctions[0],
                    "ex": e.nativeEvent.offsetX,
                    "ey": e.nativeEvent.offsetY,
                    "color": lineColor,
                    "opacity": lineOpacity,
                    "width": lineWidth
                }
            ]
        )
    }

    // When user stops clicking, pen is lifted
    const endStroke = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
        setInstructions(
            [...instructions,
                {
                    "fn": canvasFunctions[1],
                    "ex": null,
                    "ey": null,
                    "color": null,
                    "opacity": null,
                    "width": null
                }
            ]
        );
    }

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        contextRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        contextRef.current.stroke();

        setInstructions(
            [...instructions,
                {
                    "fn": canvasFunctions[2],
                    "ex": e.nativeEvent.offsetX,
                    "ey": e.nativeEvent.offsetY,
                    "color": lineColor,
                    "opacity": lineOpacity,
                    "width": lineWidth
                }
            ]
        )
        console.log(lineOpacity);
    };

    return (<Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
        },
    }}>
        <Paper square elevation={12} sx={{
            bgcolor: 'white'
        }}>
            <canvas onMouseDown={startStroke}
                    onMouseUp={endStroke}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`500px`}
                    height={`500px`}/>
        </Paper>
        <CanvasDrawer color={lineColor} setColor={setLineColor} setOpacity={setLineOpacity} setWidth={setLineWidth} />
    </Box>)
}

export default Canvas;