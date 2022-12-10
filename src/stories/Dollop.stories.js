import React from "react";
import ThemedDollop from "./themed_components/ThemedDollop";

export default {
  title: "Dollop",
  component: ThemedDollop,
};

export const Default = () => <ThemedDollop />;

export const White = () => <ThemedDollop color={"#FFFFFF"} />;
