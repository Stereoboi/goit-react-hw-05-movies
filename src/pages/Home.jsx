import { fetchFilms } from "api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [trendingFils, setTrendingFils] = useState([]);
  const location = useLocation();
  
  useEffect(() => {

    const getFetch = async () => {
      try {
        const result = await fetchFilms();
        console.log(result);
        setTrendingFils([...result])
        
        
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();
  }, [] )


  return (
    <main>
      <h1>Trending this week</h1>
      <ul>
        {trendingFils.map(film => (
          <li key={film.id}>
            {<Link to={`movies/${film.id}`} state={{from: location}}>
                <p>{film.name || film.title}</p>
            </Link>}
          </li>
        ))}
      </ul>
    </main>
  );
};