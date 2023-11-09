import { useState } from 'react'

export default function SearchBar(movie) {

    const [searchTerm, setSearchTerm] = useState('')
    
    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault(); // stop the form from making an http request
        movie.setSearchMovieName(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search Movie'
            />
            <button type='Submit'>Search</button>
        </form>
    )
}
