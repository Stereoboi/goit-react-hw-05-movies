import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Container,  Header, Link, Navigation, Wrapper  } from "./SharedLayout.styled"; 
import ScalableContainer from "components/ScalableWrapper/ScalableWrapper";
import { HeaderTitle } from "components/HeaderTitle/HeaderTitle";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">
            Movies
          </Link>
        </Navigation>
        <HeaderTitle/>
      </Header>
    <Wrapper>
      <ScalableContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </ScalableContainer>
    </Wrapper>
    </Container>
  );
};