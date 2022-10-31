import { useParams, Outlet, Link, useLocation,  } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsById } from "api/api";
import { Suspense } from "react";

const MovieDetails = () => {
const { movieId } = useParams();
const [movieData, setMovieData] = useState(null); 
const [genres, setGenres] = useState([])
const location = useLocation();

const backLinkHref = location.state?.from ?? '/';
console.log(backLinkHref);
 
  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchFilmsById(movieId);
        
        setMovieData(result)
        setGenres(result.genres)
        // console.log(result);
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();

    
  },[movieId])


  if (movieData) {
    const { poster_path, title, release_date, popularity, overview,  } = movieData;
    
    const genresMap = genres.map(el=>el.name + " ")
    
    return (
    
      <div>
      <Link to={backLinkHref} type='button'>Back</Link>
      <h2>MovieDetailsPage</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width="250"
          />
          <h2>
            {movieData.title}({release_date.slice(0, 4)})
          </h2>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <p>User Score : {Math.round(Number(popularity))}%</p>
          <h3>Genres</h3>
          <p>{genresMap}</p>
          <li>
            <Link to='cast' state={{from: backLinkHref}}>Cast</Link>
          </li>
          <li>
            <Link to='reviews' state={{from: backLinkHref}}>Reviews</Link>
          </li>
          
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      
  )
  }
  return 
}

export default MovieDetails

