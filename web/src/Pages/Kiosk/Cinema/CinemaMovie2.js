import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CinemaMovie2.css";
import bumImage from './img/sang.jpeg';
import ResultModal from '../ResultModal';

function CinemaMovie2() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const movie = {
        title: "생갈치1호의 행방불명",
        poster: bumImage,
        rating: "ALL",
        format: "2D 디지털 더빙",
        times: [
            { time: "13:10 - 15:00", seats: "48/120석", theater: "1관" },
            { time: "14:30 - 16:30", seats: "48/120석", theater: "3관" },
            { time: "17:30 - 19:30", seats: "108/120석", theater: "4관" },
            { time: "20:10 - 22:10", seats: "48/120석", theater: "1관" },
        ]
    };

    const handleTimeSelect = () => {
        navigate('./Seat2');
    };

    const handleWrongSelection = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="cinemaMovie2-background">
            <div className="movie-detail-container">
                <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster-large" />
                <div className="movie-info">
                    <div className="movie-title">
                        <span className="movie-rating">{movie.rating}</span> {movie.title}
                    </div>
                    <div className="movie-format">{movie.format}</div>
                    <div className="showtimes-container">
                        {movie.times.map((timeSlot, index) => (
                            <button 
                                key={index} 
                                className="showtime-box"
                                onClick={index === 0 ? handleTimeSelect : handleWrongSelection}
                            >
                                <div className="showtime">{timeSlot.time}</div>
                                <div className="seats">{timeSlot.seats}</div>
                                <div className="theater">{timeSlot.theater}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {showModal && (
                <ResultModal 
                    correct={false} 
                    onClose={closeModal} 
                    navigate={navigate}
                />
            )}
        </div>
    );
}

export default CinemaMovie2;
