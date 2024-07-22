// src/components/Scissors.js
import React from 'react';

const Scissors = ({ x, y }) => (
    <svg width="60" height="60" style={{ position: 'absolute', left: x, top: y }}>
        <circle cx="15" cy="15" r="4" fill="black" />
        <circle cx="25" cy="15" r="4" fill="black" />
        <line x1="15" y1="15" x2="35" y2="-20" stroke="black" strokeWidth="2" />
        <line x1="25" y1="15" x2="0" y2="-20" stroke="black" strokeWidth="2" />
    </svg>
);

export default Scissors;
