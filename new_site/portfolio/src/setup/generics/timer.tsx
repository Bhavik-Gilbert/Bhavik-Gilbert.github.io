import React from 'react';

// timer function
const timer = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

export {timer};