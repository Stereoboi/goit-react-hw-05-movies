import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { lazy } from "react";

const Movies = lazy(() => import('../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
        </Route>
      </Routes>
    </>
  );
};