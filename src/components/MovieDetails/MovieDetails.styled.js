import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const LinkItem = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    margin-right: 15px;

  &:hover {
    color: white;
    background-color: orangered;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const BackLinkItem = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

  &:hover {
    color: white;
    background-color: orangered;
  }
  
`;


export const Wrapper = styled.div`
  
`
export const WrapperInfo = styled.div`
  display:flex;
  margin-top:15px;
`
export const TextWrapper = styled.div`
  padding-right:20px;
  padding-left:20px;
  padding-bottom:20px;
  
  flex-direction:column;
`
export const PageTitle = styled.h2`
  margin-top:15px;
`
export const Poster = styled.img`

`
export const Title = styled.h3`
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const MovieTitle = styled.h3`
  font-size: 40px;
`
export const Text = styled.p`
  font-size: 20px;
`
export const List = styled.ul`
  display:flex;
  margin-top: 15px;
`;

export const ListItem = styled.li`
  margin-top:15px;
`;
