import MoviesData from "../MoviesData"
const categories = {
    POPULAR:"popular",
    ACCION:"accion",
    TERROR:"terror",
}

export const getCategoriesMovies = () => {
    const movieList = MoviesData()
    const popular = []
    const accion = []
    const terror = []

    // const moviesInCategory = movieList.filter(
    //     (movie) => movie.categoria === categoryName
    // );
    
    movieList.forEach ((movie)=> {

        switch (movie.categoria) {
            case categories.POPULAR:
                popular.push(movie)
                break;
            case categories.ACCION:
                accion.push(movie)
                break;
        
            default:
                terror.push(movie)
                break;
        }
        
    })
    
    return [popular,terror,accion]
}