import React from "react";
import Doodle from "../components/Doodle";
import { parse, stringToObj } from "../util/drawing";

export default {
  title: "Doodle",
  component: Doodle,
};

export const Default = () => <Doodle instructions={parse()} />;
