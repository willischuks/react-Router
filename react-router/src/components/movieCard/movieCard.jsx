import React from "react";
import "./movieCard.css";
import { FaShareAlt, FaHeart, FaCommentAlt } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    // const {id} = movie;
    return (
        <div className="movie_card">
        <div className="info_section">
            <div className="movie_header">
            <img className="locandina" src={movie.posterUrl} alt="img-movie" />
            <h1>
                <Link to={`/description/${movie.id}`}>{movie.title}</Link>
            </h1>
            <div className="movie_detail">
                <p>
                <FaCalendarAlt size="22px" /> {movie.releaseDate}
                </p>
                <p className="minutes">
                <FaClock size="22px" /> {movie.duration}
                </p>
                <p><PiTelevisionSimpleBold size="22px"/>{movie.genre}</p>
            </div>
            <div className="movie_rating">
                <p>< IoStar size="22px"/>{movie.rating}</p>
            </div>
            </div>
            <div className="movie_desc">
            <p className="text">{movie.description}</p>
            </div>

            <div className="movie_social">
            <ul>
                <li>
                <FaShareAlt className="material-icons" />
                </li>
                <li>
                <FaHeart className="material-icons" />
                </li>
                <li>
                <FaCommentAlt className="material-icons" />
                </li>
            </ul>
            </div>
        </div>
        <div
            className="blur_back"
            style={{ background: `url(${movie.backdropPath})` }}
        />
        </div>
    );
};

export default MovieCard;
