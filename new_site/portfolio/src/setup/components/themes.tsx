import React from 'react';

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

enum colourThemes {
    originDark = "originDark",
    originLight = "originLight",
    dark = "dark",
    light = "light"
}

export { colourThemes, defaultTheme };