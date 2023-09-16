import React from 'react';

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

enum colourThemes {
    darkest = "darkest",
    darker = "darker",
    lighter = "lighter",
    lightest = "lightest"
}

export { colourThemes, defaultTheme };