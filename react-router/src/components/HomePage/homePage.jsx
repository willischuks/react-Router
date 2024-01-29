    import React, { useState } from 'react';
    // import {Routes, Route, Link} from 'react-router-dom';
    import { movies } from '../Data/movies'
    import MovieList from '../movieList/movieList';
    import Filter from '../filterMovies/filterMovies';
    import AddMovie from '../addMovie/addmovie';
    import NavBar from '../navBar/navBar'
    import { Outlet } from 'react-router-dom';




    const  HomePage = () => { 

    // const [movies] = useState();

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const handleFilterChange = (field, value) => {
        // Convert the value to lowercase for case-insensitive filtering
        const lowercaseValue = value.toLowerCase();

        // Filter the movies based on the given field and value
        const filtered = movies.filter((movie) => {
        // If the field doesn't exist in the movie object, return false to filter it out
        if (!movie.hasOwnProperty(field)) {
            return false;
        }

        // Get the movie field value and convert it to lowercase for case-insensitive comparison
        const fieldValue = movie[field].toString().toLowerCase();

        // Check if the fieldValue contains the lowercaseValue
        return fieldValue.includes(lowercaseValue);
        });
    
        // Update the filtered movies state
        setFilteredMovies(filtered);
    };

    return (
            <div>
                <NavBar/>
                <Outlet/>
                <Filter onFilterChange={handleFilterChange} />
                <MovieList movies={filteredMovies} />
                <AddMovie/>

            </div>
    )
}

export default HomePage;