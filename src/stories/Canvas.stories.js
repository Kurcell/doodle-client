// Button.stories.js|jsx

import React from 'react';

import Canvas from '../components/Canvas.js'
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Canvas',
    component: Canvas,
};

export const Default = () => <Canvas />;