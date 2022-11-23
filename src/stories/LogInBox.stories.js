import ThemedLogInBox from "./themed_components/ThemedLogInBox";
import React from "react";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'LogInBox',
    component: ThemedLogInBox,
};

export const Default = () => <ThemedLogInBox />;