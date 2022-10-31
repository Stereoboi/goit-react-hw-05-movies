import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsByCredits } from "api/api";

const Cast = () => { 
const { movieId } = useParams();
const [castData, setCastData] = useState(null); 

  useEffect(() => {
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsByCredits(movieId);
        console.log(result);
        setCastData(result)
        
      } catch (err) {
        console.log('error');
      }
    }
    getFetchCast();
 },[movieId])


  if (castData) {
    return (
    <>
      <h3>Cast</h3>
      <ul>
          {castData.map(el => (
          <li key={el.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
                width="150"
                />
                <p>{el.name}</p>
                <p>{el.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
  }
}

export default Cast