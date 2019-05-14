import React from 'react'

const MovieFinder = ({onChange, searchText, onSearch}) => (
    <div>
        <input type="text" onChange={onChange} value={searchText} placeholder="ingrese la busqueda"/>
        <button type="button" onClick = {onSearch}>Buscar! </button>
    </div>
)

export default MovieFinder;