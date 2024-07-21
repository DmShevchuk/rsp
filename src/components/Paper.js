// src/components/Paper.js
import React from 'react';

const Paper = ({ x, y }) => (
    <svg width="40" height="40" style={{ position: 'absolute', left: x, top: y }}>
        <rect width="30" height="40" x="5" y="0" fill="white" stroke="black" />
    </svg>
);

export default Paper;
