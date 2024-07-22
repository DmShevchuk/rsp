// src/components/Paper.js
import React from 'react';

const Paper = ({ x, y }) => (
    <svg width="40" height="40" style={{ position: 'absolute', left: x, top: y }}>
        <rect width="30" height="40" x="5" y="0" fill="white" stroke="black" />
        {/* Первая линия */}
        <line x1="10" y1="10" x2="30" y2="10" stroke="gray" strokeWidth="1" />
        {/* Вторая линия */}
        <line x1="10" y1="20" x2="30" y2="20" stroke="gray" strokeWidth="1" />
        {/* Третья линия */}
        <line x1="10" y1="30" x2="30" y2="30" stroke="gray" strokeWidth="1" />
    </svg>
);

export default Paper;
