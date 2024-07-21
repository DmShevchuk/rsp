// src/components/Scissors.js
import React from 'react';

const Scissors = ({ x, y }) => (
    <svg width="40" height="40" style={{ position: 'absolute', left: x, top: y }}>
        <circle cx="15" cy="15" r="5" fill="red" />
        <circle cx="25" cy="15" r="5" fill="red" />
        <line x1="15" y1="15" x2="5" y2="35" stroke="red" strokeWidth="2" />
        <line x1="25" y1="15" x2="35" y2="35" stroke="red" strokeWidth="2" />
        <line x1="10" y1="30" x2="30" y2="30" stroke="red" strokeWidth="2" />
    </svg>
);

export default Scissors;
