import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CinemaMovie6.css";
import bumImage from './img/myeong.jpeg';
import ResultModal from '../ResultModal';

function CinemaMovie6() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const movie = {
        title: "명함정 고난",
        poster: bumImage,
        rating: "15",
        format: "3D 디지털 더빙",
        times: [
            { time: "12:00 - 14:00", seats: "48/120석", theater: "1관" },
            { time: "14:30 - 16:30", seats: "48/120석", theater: "3관" },
            { time: "17:30 - 19:30", seats: "108/120석", theater: "4관" },
            { time: "20:10 - 22:10", seats: "48/120석", theater: "1관" },
        ]
    };

    const handleTimeSelect = () => {
        navigate('./Seat6');
    };

    const handleWrongSelection = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="cinemaMovie4-background">
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
                                onClick={index === 3 ? handleTimeSelect : handleWrongSelection}
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

export default CinemaMovie6;
