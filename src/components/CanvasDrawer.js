import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import Slider from '@mui/material/Slider';
import { ChromePicker } from 'react-color';
import {useState} from "react";

const drawerBleeding = 56;

const CanvasDrawer = ({color, setColor, opacity, setOpacity}) => {
    const [open, setOpen] = useState(false);

    const extractHex = (colorObject) => {
        setColor(colorObject.hex);
    }
    const extractOpacity = (sliderObject) => {
        setOpacity(sliderObject.target.value)
    }

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (<Box>
            <Box sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box>
        <SwipeableDrawer
            sx={{color: 'secondary.main'}}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <ChromePicker color={color} onChange={extractHex} disableAlpha={true} />
            <Box sx={{width:'25%'}}>
                <Stack direction="row" alignItems="center">
                    <OpacityIcon />
                    <CircleOutlinedIcon />
                    <Slider
                        aria-label="Opacity"
                        valueLabelDisplay="auto"
                        value={opacity}
                        onChange={extractOpacity}
                        step={0.1}
                        min={0.1}
                        max={1}
                    />
                    <CircleIcon />
                </Stack>
            </Box>
        </SwipeableDrawer>
        </Box>);
}

export default CanvasDrawer;