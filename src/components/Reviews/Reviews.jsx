import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsReviews } from "api/api";

const Reviews = () => { 
const { movieId } = useParams();
const [reviewsData, setReviewsData] = useState([]); 

  useEffect(() => {
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsReviews(movieId);
        console.log(result);
        setReviewsData(result)
        
      } catch (err) {
        console.log('error');
      }
    }
    getFetchCast();
 },[movieId])


  if (reviewsData) {
    return (
    <>
      <h3>Reviews</h3>
      <ul>
          {reviewsData.map(el => (
          <li key={el.id}>
            <h2>{el.author}</h2>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
  }
}

export default Reviews