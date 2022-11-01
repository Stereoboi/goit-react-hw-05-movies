import { useParams, Outlet, useLocation,  } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsById } from "api/api";
import { Suspense } from "react";
import {
  LinkItem,
  Wrapper,
  WrapperInfo,
  TextWrapper,
  PageTitle,
  Poster,
  Title,
  MovieTitle,
  Text,
  ListItem,
  List,
  BackLinkItem

} from "./MovieDetails.styled";

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
        // console.log(result);
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();

    
  },[movieId])


  if (movieData) {
    const { poster_path, title, release_date, popularity, overview,  } = movieData;
    
    const genresMap = genres.map(el=>el.name + ", ")
    
    return (
    
      <Wrapper>
      <BackLinkItem to={backLinkHref} type='button'>Back</BackLinkItem>
        <PageTitle>MovieDetailsPage</PageTitle>
        <WrapperInfo>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="350"
          />
          <TextWrapper>
            <MovieTitle>
              {movieData.title}({release_date.slice(0, 4)})
            </MovieTitle>
              <Title>Overview:</Title>
                <Text>{overview}</Text>
            <Title>
              <Text>User Score : {Math.round(Number(popularity))}%</Text>
            </Title>
            <Title>Genres</Title>
            <Text>{genresMap}</Text>
          </TextWrapper>
        </WrapperInfo>
          <List>
            <ListItem>
              <LinkItem to='cast' state={{from: backLinkHref}} end>Cast</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem to='reviews' state={{from: backLinkHref}}>Reviews</LinkItem>
            </ListItem>
          </List>
          
        <Suspense>
          <Outlet />
        </Suspense>
      </Wrapper>
      
  )
  }
  return 
}

export default MovieDetails

