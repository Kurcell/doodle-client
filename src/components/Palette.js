import PaletteBoard from "./PaletteBoard";
import Dollop from "./Dollop";
import { useState } from "react";

const Palette = ({ setLineWidth, setLineColor }) => {
  const [openColorPicker, setOpenColorPicker] = useState(false);
  return (
    <PaletteBoard>
      <Dollop
        color={"#94B49F"}
        openColorPicker={openColorPicker}
        setOpenColorPicker={setOpenColorPicker}
        setLineWidth={setLineWidth}
        setLineColor={setLineColor}
      />
      <Dollop
        color={"#789395"}
        openColorPicker={openColorPicker}
        setOpenColorPicker={setOpenColorPicker}
        setLineWidth={setLineWidth}
        setLineColor={setLineColor}
      />
      <Dollop
        color={"#4A8076"}
        openColorPicker={openColorPicker}
        setOpenColorPicker={setOpenColorPicker}
        setLineWidth={setLineWidth}
        setLineColor={setLineColor}
      />
      <Dollop
        color={"#557660"}
        openColorPicker={openColorPicker}
        setOpenColorPicker={setOpenColorPicker}
        setLineWidth={setLineWidth}
        setLineColor={setLineColor}
      />
    </PaletteBoard>
  );
};

export default Palette;
