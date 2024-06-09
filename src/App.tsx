import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeScreen from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileScreen from "./pages/Profile";
import MoviesPage from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <Router>
      <nav>
        {/* <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li> */}
      </nav>
      <main className="container content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
          </Route>
          <Route path="/" element={<HomeScreen />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<SingleMovie />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
