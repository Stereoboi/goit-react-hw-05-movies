import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilmsReviews } from "api/api";
import {
  ReviewList,
  ReviewItem,
  ReviewAuthorWrapper,
  ReviewAuthorAvatar,
  ReviewAuthorName,
  ReviewContent,
  ErrorTitle
} from "./Reviews.styled";
import { API_IMG } from "api/api";
import Default from "../../Images/Default.png"

const Reviews = () => { 
const { movieId } = useParams();
const [reviewsData, setReviewsData] = useState([]); 
const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  useEffect(() => {
   const getFetchCast = async () => {
      try {
        const result = await fetchFilmsReviews(movieId);
        console.log(result);
        setReviewsData(result)
      } catch (err) {
        
      }
    }
    getFetchCast();
 },[movieId])
 
  const userAvatar = (avatarPath) => {
    let avatar = Default;

    if (avatarPath) {
      avatar = avatarPath.startsWith("/http")
        ? avatarPath.slice(1)
        : `${API_IMG.IMAGE_URL}/w200/${avatarPath}`;
    }

    return avatar;
  };


  if (reviewsData.length > 0) {
    return (
    <ReviewList >
          {reviewsData.map(({ id, author, author_details, content }) => {
            const avatar = userAvatar(author_details.avatar_path);

            return (
              <ReviewItem key={id}>
                <ReviewAuthorWrapper>
                  <ReviewAuthorAvatar
                    src={isAvatarLoaded ? avatar : Default}
                    width="50"
                    height="50"
                    onLoad={() => setIsAvatarLoaded(true)}
                  />
                  <ReviewAuthorName>{author}</ReviewAuthorName>
                </ReviewAuthorWrapper>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
      </ReviewList>
  )
  }
  
  return <ErrorTitle>There is no reviews.</ErrorTitle> 
  
}

export default Reviews