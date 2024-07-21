// src/components/Rock.js
import React from 'react';

const Rock = ({x, y}) => (
    <svg width="40" height="40" style={{position: 'absolute', left: x, top: y}}>
        <circle cx="20" cy="20" r="20" fill="gray"/>
    </svg>
);

export default Rock;
