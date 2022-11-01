import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsByCredits } from "api/api";
import {
  Title,
  Text,
  List,
  ListItem,
  Wrapper,
  Poster,
  TextWrapper

} from "./Cast.styled";


const Cast = () => { 
const { movieId } = useParams();
const [castData, setCastData] = useState(null); 

  useEffect(() => {
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsByCredits(movieId);
        
        setCastData(result)
        
      } catch (err) {
        
      }
    }
    getFetchCast();
 },[movieId])


  if (castData) {
    return (
    <Wrapper>
      <Title>Cast</Title>
      <List>
          {castData.map(el => (
          <ListItem key={el.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt={el.name}
                width="150"
                />
              <TextWrapper>
                <Title>Name</Title>
                <Text>{el.name}</Text>
                <Title>Character</Title>
                <Text>{el.character}</Text>
            </TextWrapper>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
  }
}

export default Cast