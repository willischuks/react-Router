import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./addMovie.css";

const AddMovie = ({ addNewMovie }) => {
  const [title, setTitle] = useState("");
  const [backdropPath, setBackdropPath] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title,
      backdropPath,
      posterUrl,
      releaseDate,
      rating: +rating,
      duration,
      genre,
      description,
    };
    addNewMovie(newMovie);
    setTitle("");
    setBackdropPath("");
    setPosterUrl("");
    setReleaseDate("");
    setRating("");
    setDuration("");
    setGenre("");
    setDescription("");
  };
  return (
    <Popup
      trigger={<button className="button"> Add movie </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modale">
          <div className="close" onClick={close}>
            &times;
          </div>
          <div className="header">Form for adding new movie</div>
          <div className="content">
            {" "}
            <form>
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="url"
                  className="form-control"
                  placeholder="Backdrop Path"
                  value={backdropPath}
                  onChange={(e) => setBackdropPath(e.target.value)}
                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="url"
                  className="form-control"
                  placeholder="Poster Url"
                  value={posterUrl}
                  onChange={(e) => setPosterUrl(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Release Date"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ratings"
                  value={rating}
                  min="0"
                  max="5"
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <textarea
                  className="form-control"
                  id="form6Example7"
                  rows={4}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={(e) => {
                submitForm(e);
                close();
              }}
            >
              submit
            </button>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddMovie;
