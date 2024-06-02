import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseSeat3.css';
import moviePoster from './img/jeo.jpeg';
import ResultModal from '../ResultModal';

function ChooseSeat3() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const navigate = useNavigate();

    const movie = {
        title: "저속스캔들",
        date: "2024. 06. 05 (수)",
        time: "15:20 - 17:30",
        theater: "한양대학교 상영관 4관",
        rating: "12",
        totalSeats: selectedSeats.length
    };

    const seats = [
        ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12'],
        ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12'],
        ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12'],
        ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12'],
        ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12'],
        ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
        ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'],
        ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12']
    ];

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleConfirmSelection = () => {
        if (selectedSeats.length === 1) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        if (isCorrect) {
            navigate('/Pages/Kiosk');
        }
    };

    return (
        <div className="Seat-Movie2-background">
            <div className="Seat-movie-info">
                <img src={moviePoster} alt={`${movie.title} Poster`} className="Seat-movie-poster" />
                <div className="Seat-movie-details">
                    <div className="Seat-movie-title">
                        <span className="Seat-movie-rating">{movie.rating}</span> {movie.title}
                    </div>
                    <div className="Seat-movie-date">{movie.date} {movie.time}</div>
                    <div className="Seat-movie-theater">{movie.theater}</div>
                    <div className="Seat-total-seats">총 선택 인원 {movie.totalSeats}명</div>
                </div>
            </div>
            <div className="screen">SCREEN</div>
            <div className="seats-container">
                {seats.map((row, rowIndex) => (
                    <div key={rowIndex} className="seat-row">
                        {row.map((seat, seatIndex) => (
                            <div
                                key={seatIndex}
                                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                                onClick={() => handleSeatClick(seat)}
                            >
                                {seat}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={handleConfirmSelection} className="Seat-confirm-button">확인</button>
            {showModal && (
                <ResultModal 
                    correct={isCorrect} 
                    onClose={closeModal} 
                    navigate={navigate}
                />
            )}
        </div>
    );
}

export default ChooseSeat3;
