import { useLocation, Link} from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className='NavBar-container' style={{ background: isHomePage ? "none" : "var(--black)", position: isHomePage ? "absolute" : "relative" }}>
      <div className="left-navbar">
        <div className='Menu-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
        <div className='Search-Icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
      </div>

      <div className='right-navbar'>
        <ul className='ul-navbar' >
          <li className='Home-navbar' >
            <Link to="/" >Inicio</Link>
          </li>
          <li className='movies-navbar' >
            <Link to="/" >Peliculas</Link>
          </li>
          <li className='series-navbar' >
            <Link to="/" >Series</Link>
          </li>
          <li className='categories-navbar' >
            <Link to="/" >Categorias</Link>
          </li>
          <li className='user-navbar' >
            <Link to="/register" >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
