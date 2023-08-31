import MovieCard from "../movies/movieCard/MovieCard";

export const SimilarMovies = ({ categoryMovie }) => {
    return (
        <>
            {categoryMovie.length ? categoryMovie.map ((categoryList, index) => {
                return(
                <div key={index}>
                    <p className="title__category">{categoryList[0]?.categoria}</p>
                    <div className="line__separator">
                    </div>
                    <div className="movies__container">
                        {categoryList.length > 0 && categoryList?.map((category, indexCategory) => {
                            return (<MovieCard key={indexCategory} movie={category} />)
                        }).slice(0, 10)}
                    </div>
                </div>
                )
            }) : <p className="title__category"> no hay datos</p>}
        </>
    )
}