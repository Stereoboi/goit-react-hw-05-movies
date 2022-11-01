import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsReviews } from "api/api";
import {
  Title,
  Text,
  List,
  ListItem,
  Wrapper,
  ErrorTitle
} from "./Reviews.styled";

const Reviews = () => { 
const { movieId } = useParams();
const [reviewsData, setReviewsData] = useState([]); 

  useEffect(() => {
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsReviews(movieId);
        setReviewsData(result)
      } catch (err) {
        
      }
    }
    getFetchCast();
 },[movieId])


  if (reviewsData.length > 0) {
    return (
    <Wrapper>
      <List>
          {reviewsData.map(el => (
          <ListItem key={el.id}>
            <Title>{el.author}</Title>
            <Text>{el.content}</Text>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
  }
  
  return <ErrorTitle>There is no reviews.</ErrorTitle> 
  
}

export default Reviews