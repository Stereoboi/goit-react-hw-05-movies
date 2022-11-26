import { useLocation } from "react-router-dom";
import { useState } from "react";
import defaultImage from "../../Images/defaultImage.png"
import { API_IMG } from "api/api";

import {
  MovieWrapper,
  Image,
  ContentWrapper,
  MovieTitle,
  Info,
  List,
  Item,
  Title,
  Rating,
  Content,
  TitleH3,
  Overview,
  AdditionalLinksWrapper,
  LinkItem
} from "./MovieDetailsComponent.styled";

export const MovieDetailsComponent = ({
  posterPath,
  title,
  originalTitle,
  genres,
  releaseDate,
  rating,
  voteCount,
  popularity,
  overview,
}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location.state.from);
  return (
    <>
      <MovieWrapper>
        <Image
          src={
            posterPath && isLoaded
              ? `${API_IMG.IMAGE_URL}/original${posterPath}`
              : defaultImage
          }
          alt={title}
          onLoad={() => setIsLoaded(true)}
          width="300"
          height="450"
        />

        <ContentWrapper>
          <MovieTitle>{`${title} (${releaseDate.slice(0, 4)})`}</MovieTitle>

          <Info>
            <List>
              <Item>
                <Title>Vote / Votes</Title>
                <Content>
                  <Rating rating={rating}>{rating}</Rating> / {voteCount}
                </Content>
              </Item>

              <Item>
                <Title>Popularity</Title>
                <Content>{popularity}</Content>
              </Item>

              <Item>
                <Title>Original Title</Title>
                <Content>{originalTitle}</Content>
              </Item>

              <Item>
                <Title>Genres</Title>
                <Content>{genres}</Content>
              </Item>
            </List>
          </Info>

          <TitleH3>About</TitleH3>

          <Overview>{overview}</Overview>

          <AdditionalLinksWrapper>
            <LinkItem to='cast' state={{from: backLinkHref}} end>
              Cast
            </LinkItem>

            <LinkItem to='reviews' state={{from: backLinkHref}} >
              Reviews
            </LinkItem>
          </AdditionalLinksWrapper>
        </ContentWrapper>
      </MovieWrapper>
    </>
  )
}