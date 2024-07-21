// src/components/GameOverModal.js
import React from 'react';
import './GameOverModal.css'; // Обновите или создайте файл стилей

const GameOverModal = ({ isOpen, winner, onRequestClose }) => {
    if (!isOpen) return null;

    return (
        <div className="game-over-overlay" onClick={onRequestClose}>
            <div className="game-over-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-title">Game over</div>
                    <div className="modal-message">Winner: {winner}</div>
                    <button className="modal-button" onClick={onRequestClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default GameOverModal;
