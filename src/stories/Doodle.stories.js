import React from "react";
import Doodle from "../components/Doodle";
import { parseTesting } from "../util/drawing";

export default {
  title: "Doodle",
  component: Doodle,
};

export const Default = () => <Doodle instructions={parseTesting()} />;
