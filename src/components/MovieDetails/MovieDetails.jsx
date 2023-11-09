
export default function MovieDetails({movie}){
    return (
        <div>
            <h1>{movie.Title} </h1>
            <h2>{movie.Year}</h2>
            <img src={movie.Poster} alt='movie'/>
            <h3>{movie.Genre}</h3>
            <h4>{movie.Plot}</h4>
        </div>
    )
}