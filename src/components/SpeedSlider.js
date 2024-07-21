// src/components/SpeedSlider.js
import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
    const getSpeedDescription = (speed) => {
        if (speed <= 1) return "Very fast";
        if (speed <= 10) return "Fast";
        if (speed <= 25) return "Normal";
        if (speed <= 40) return "Slow";
        return "Very slow";
    };

    const handleSpeedChange = (e) => {
        const sliderValue = Number(e.target.value);
        const newSpeed = 51 - sliderValue; // Инвертируем значение для нового диапазона
        setSpeed(newSpeed);
    };

    return (
        <div className="speed-slider">
            <label htmlFor="speed">Speed:</label>
            <div>{getSpeedDescription(speed)}</div>
            <input
                id="speed"
                type="range"
                min="1"
                max="50"
                value={51 - speed} // Инвертируем значение для отображения на ползунке
                onChange={handleSpeedChange}
            />
        </div>
    );
};

export default SpeedSlider;
