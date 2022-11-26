import { useParams, Outlet, useLocation,  } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsById } from "api/api";
import { Suspense } from "react";
import { Wrapper, BackLinkItem,  } from "./MovieDetails.styled";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { MovieDetailsComponent } from "components/MovieDetailsComponent/MovieDetailsComponent";

const MovieDetails = () => {
const { movieId } = useParams();
const [movieData, setMovieData] = useState(null); 
const [genres, setGenres] = useState([])
const location = useLocation();

const backLinkHref = location.state?.from ?? '/';
 
  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchFilmsById(movieId);
        
        setMovieData(result)
        setGenres(result.genres)
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();

    
  },[movieId])


  if (movieData) {
    const { 
      id,
      poster_path,
      title,
      original_title,
      release_date,
      vote_average,
      vote_count,
      popularity,
      overview,
    } = movieData;

    const genresMap = genres.map(el=>el.name + ", ")
    
    return (
      <Wrapper>
          <BackLinkItem to={backLinkHref} type='button'>
            <ArrowBackIosRoundedIcon/>    
            Back
          </BackLinkItem>  
        <MovieDetailsComponent
            id={id}
            posterPath={poster_path}
            title={title}
            originalTitle={original_title}
            genres={genresMap || "\u2015"}
            releaseDate={release_date || "\u2015"}
            rating={vote_average}
            voteCount={vote_count}
            popularity={popularity}
            overview={overview}
        />
        <Suspense>
          <Outlet />
        </Suspense>
      </Wrapper>
      
  )
  }
  return 
}

export default MovieDetails

