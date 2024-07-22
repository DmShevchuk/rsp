// src/components/Rock.js
import React from 'react';

const Rock = ({x, y}) => (
    <svg
        width="40"
        height="40"
        style={{
            position: 'absolute',
            left: x,
            top: y,
        }}
    >
        <circle
            cx="20"
            cy="20"
            r="20"
            fill="gray"
            stroke="black" // цвет рамки
            strokeWidth="2" // ширина рамки
        />
    </svg>
);

export default Rock;
