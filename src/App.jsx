import { Route, Routes, BrowserRouter, useNavigate} from "react-router-dom";
import { AuthProvider } from "./Auth/auth";
import { Error404 } from "./Pages/Error404/Error404";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/DashBoard/DashBoard";
import Logout from "./Pages/Logout/Logout";
import Profile from "./Pages/Profile/Profile";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Container/Navbar";
import MovieInfo from "./Container/MovieInfo/MovieInfo";

function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/movie/:nombre" element={<MovieInfo />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
export default AppRouter;