import { fetchFilms } from "api/api";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import {
  LinkItem,
  Text,
  ListItem,
  Title,
  List,
  MovieWrapper
} from "./Home.styled";


const Home = () => {
  const [trendingFils, setTrendingFils] = useState([]);
  const location = useLocation();
  
  useEffect(() => {

    const getFetch = async () => {
      try {
        const result = await fetchFilms();
        setTrendingFils([...result])
        
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();
  }, [] )


  return (
    <MovieWrapper>
      <Title>Trending this week</Title>
      <List>
        {trendingFils.map(film => (
          <ListItem key={film.id}>
            {<LinkItem to={`movies/${film.id}`} state={{from: location}}>
                <Text>{film.name || film.title}</Text>
            </LinkItem>}
          </ListItem>
        ))}
      </List>
    </MovieWrapper>
  );
};

export default Home