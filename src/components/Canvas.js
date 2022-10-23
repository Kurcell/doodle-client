import Paper from '@mui/material/Paper';
import {Box} from "@mui/material";
import {useEffect, useRef, useState} from "react";

const Canvas = props => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    // Initial context for canvas
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

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
    }

    // When user stops clicking, pen is lifted
    const endStroke = (e) => {
        contextRef.current.closePath();
        setIsDrawing(false);
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
    };

    return (<Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            width: 256,
            height: 256,
        },
    }}>
        <Paper square elevation={12}>
            <canvas onMouseDown={startStroke}
                    onMouseUp={endStroke}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`256px`}
                    height={`256px`}/>
        </Paper>
    </Box>)
}

export default Canvas;