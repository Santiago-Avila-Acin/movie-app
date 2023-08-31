import { useEffect, useState } from "react";
import { getCategoriesMovies } from "../../../Service/ApiMovies.service";
import "./Moviescategories.css"
import { SimilarMovies } from "../../SimilarMovies/SimilarMovies";


// import { supabase } from "../../../supabase/client";

function MoviesCategories() {
    const [movieCategories, setMoviesCategories] = useState([])
    useEffect(() => {
        const data = getCategoriesMovies()
        setMoviesCategories(data)
    }, [])

                    //PRUEBA LLAMADO A SUPABASE (no funciona)

// useEffect(() => {
//     const fetchMovies = async () => {
//         try {
//         const { data: movies, error } = await supabase
//             .from('movies')
//             .select("*")
//             .eq('category', 'accion');
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(movies);
//         }
//         } catch (error) {
//         console.log(error);
//         }
//     };

//     fetchMovies();
//     }, []);
    return (
        <>
            <SimilarMovies
            categoryMovie = {movieCategories}
            />
        </>
    )
}

export default MoviesCategories