import React from 'react';
import "./CinemaMovie1.css";
import bumImage from './img/bum.jpeg'; // Update the path as necessary

function CinemaMovie1() {
    const movie = {
        title: "범죄시티",
        poster: bumImage,
        rating: "15",
        format: "2D 디지털 더빙",
        times: [
            { time: "12:00 - 14:00", seats: "48/120석", theater: "1관" },
            { time: "14:30 - 16:30", seats: "48/120석", theater: "3관" },
            { time: "17:30 - 19:30", seats: "108/120석", theater: "4관" },
            { time: "20:10 - 22:10", seats: "48/120석", theater: "1관" },
        ]
    };

    return (
        <div className="cinemaMovie1-background">
            <div className="movie-detail-container">
                <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster-large" />
                <div className="movie-info">
                    <div className="movie-title">
                        <span className="movie-rating">{movie.rating}</span> {movie.title}
                    </div>
                    <div className="movie-format">{movie.format}</div>
                    <div className="showtimes-container">
                        {movie.times.map((timeSlot, index) => (
                            <button key={index} className="showtime-box">
                                <div className="showtime">{timeSlot.time}</div>
                                <div className="seats">{timeSlot.seats}</div>
                                <div className="theater">{timeSlot.theater}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CinemaMovie1;
