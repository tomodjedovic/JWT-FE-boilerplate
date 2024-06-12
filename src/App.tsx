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
import DirectorsPage from "./pages/Directors";
import AddMoviePage from "./pages/AddMovie";
import SingleDirectorPage from "./pages/singleDirector";
import AddDirectorPage from "./pages/AddDirector";

function App() {
  return (
    <Router>
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
          <Route path="/directors" element={<DirectorsPage />} />
          <Route path="/addDirector" element={<AddDirectorPage />} />
          <Route path="/directors/:id" element={<SingleDirectorPage />} />
          <Route path="/addmovie" element={<AddMoviePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
