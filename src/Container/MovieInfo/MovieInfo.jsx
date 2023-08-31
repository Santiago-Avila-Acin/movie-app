import { useParams } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import MoviesData from '../../MoviesData';
import "./MovieInfo.css"
import { SimilarMovies } from '../../Components/SimilarMovies/SimilarMovies';

function MovieInfo (){
    const { nombre } = useParams ();
    const moviesData = MoviesData()
    const singlemovie = moviesData.find(movie => movie.nombre === nombre);

return (
    <div className='view_movie'>
        <div className="view_movie__main_info">
            <figure className='view_movie__image__container'>
                <img src={singlemovie.imagen} alt="" className="view_movie__image" />
            </figure>
            <section className='view_movie__section_container'>
                <h1 className="view_movie__title">{singlemovie.nombre}</h1>
                <div className="view_movie__info">
                    <h2 className="view_movie__category">categoria: {singlemovie.categoria}</h2>
                    <h2 className="view_movie__year">{singlemovie.año}</h2>
                </div>
                
                <div className="view_movie__stars">
                    {singlemovie.estrellas < 1 ? (
                        <AiOutlineStar className='view_movie__simple_star'/>
                        ) : (
                        <AiFillStar className='view_movie__simple_star' />
                    )}
                    {singlemovie.estrellas < 2 ? (
                        <AiOutlineStar className='view_movie__simple_star'/>
                        ) : (
                        <AiFillStar className='view_movie__simple_star' />
                    )}
                    {singlemovie.estrellas < 3 ? (
                        <AiOutlineStar className='view_movie__simple_star'/>
                        ) : (
                        <AiFillStar className='view_movie__simple_star' />
                    )}
                    {singlemovie.estrellas < 4 ? (
                        <AiOutlineStar className='view_movie__simple_star'/>
                        ) : (
                        <AiFillStar className='view_movie__simple_star' />
                    )}
                    {singlemovie.estrellas < 5 ? (
                        <AiOutlineStar className='view_movie__simple_star'/>
                        ) : (
                        <AiFillStar className='view_movie__simple_star' />
                    )}
                </div>
            </section>
        </div>
        <div className="view_movie_description__container">
            <h1 className='view_movie_description'>
                Descripción
            </h1>
            <p className="view_movie_description__text">
                {singlemovie.descripcion}
            </p>
        </div>
        <h1 className="view_movie__similar_movies">
            Similares
        </h1>

        <SimilarMovies className="view_movie__similar_movies" categoryMovie={singlemovie}/>

    </div>
)
}

export default MovieInfo