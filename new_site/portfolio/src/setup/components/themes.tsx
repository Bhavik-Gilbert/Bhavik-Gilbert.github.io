import React from 'react';

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

enum colourThemes {
    Dark = "dark",
    Light = "light"
}

export { colourThemes, defaultTheme };