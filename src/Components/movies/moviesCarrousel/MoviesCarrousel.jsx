import MovieCard from "../movieCard/MovieCard"
import "./MoviesCarrousel.css"

function MoviesCarrousel({ movieList }) {
    console.log(movieList)
    return (
        <>
            {movieList?.map((movie, index) => (
            <MovieCard
            key={index}
            movie= {movie}
            />))}
        </>
    )
}
export default MoviesCarrousel