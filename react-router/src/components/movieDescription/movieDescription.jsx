

// import { movies } from "../Data/movie";

import "./movieDescription.css";
import { useNavigate } from "react-router-dom";
import { movies } from "../Data/movies"
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPlayCircle } from "react-icons/fa";
import Popup from "reactjs-popup";

const MovieDescription = () => {
    const navigate = useNavigate();
    const params = useParams();
    const movie = movies.find((movie) => movie.id === params.id);
    // const { id } = useParams();
    // const navigate = useNavigate();

    // const selectedMovie = movies.filter((movie) => movie.id === id);
    // console.log('Para', params)
    // console.log('Para', movie)

    // if (selectedMovies.length === 0) {
    //     // Handle the case where the movie with the specified ID is not found
    //     return <div>Movie not found</div>;
    // }
    if (!movie) {
        // Handle the case where movies is undefined
        return <div>Loading...</div>;
    }

    // const selectedMovie = selectedMovies[0];

    return (
        <div className="movie-card">
        <div className="container">
            <>
            <img
                className="cover"
                src={movie.posterUrl}
                alt={movie.title}
            />
            <div>
            <Popup
                    trigger={
                        <button className="play_trailer">
                        <FaPlayCircle size={75} />
                        </button>
                    }
                    modal
                    >
                    {(close) => (
                        <div className="modale">
                        <div className="close" onClick={close}>
                            &times;
                        </div>
                        <div className="content">
                            <iframe
                            width="725"
                            height="400"
                            src={movie.trailerLink}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                        </div>
                    )}
                </Popup>
            </div>
            <div
                className="hero"
                style={{
                backgroundImage: `url(${movie.backdropPath})`,
                }}
            >
                <div className="details">
                <div className="title1">{movie.title}</div>
                </div>
            </div>
            <div className="description">
                <div className="column1">
                <span className="tag">{movie.genre}</span>
                </div>
                <div className="column2">
                <p>{movie.description}</p>
                </div>
            </div>
            <div className="return" >
            {/* <Link className="link" to="/">
                Back to Home
                </Link> */}
                <button onClick={() => navigate('/')}>Return to home page</button>
            </div>
            </>
        </div>
        </div>
    );
};

export default MovieDescription;
