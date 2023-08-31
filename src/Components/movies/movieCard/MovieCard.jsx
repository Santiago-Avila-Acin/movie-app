import { Link } from "react-router-dom";
import "./MovieCard.css"

export default function MovieCard( {movie} ) {
    const {imagen, nombre, categoria} = movie;

    return (
        <>
            <Link to={`/movie/${nombre}`}>
                <img className="single_movie__image" src={imagen} alt={nombre} />
            </Link>
        </>
    )
}
