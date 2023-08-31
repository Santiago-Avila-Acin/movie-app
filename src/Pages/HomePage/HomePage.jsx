import { useEffect } from "react";
import { supabase } from "../../supabase/client"
import { useNavigate } from "react-router-dom";
import Cover from "../../Components/Cover/Cover";
import "./HomePage.css";
import MoviesCategories from "../../Components/movies/moviesCategories/MoviesCategories";
// import MovieInfo from "./Container/MovieInfo/MovieInfo"

function HomePage() {
  const navigate = useNavigate()

  useEffect(() =>{
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate("/register")
      }else{
        navigate("/")
      }
    })
  },[])
  return (
    <>
      <Cover/>
      <MoviesCategories />
      {/* <MovieInfo /> */}
    </>
  )
}

export default HomePage
