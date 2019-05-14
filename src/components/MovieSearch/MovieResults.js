import React from 'react'

const MovieResults = ({movies}) => (
    <ul>
        {movies.map(movie => <li>{movie.Title}</li>)}
    </ul>    
    
    
)

export default MovieResults;