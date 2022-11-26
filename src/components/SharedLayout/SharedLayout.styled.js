import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  ${'' /* max-width: 1400px;
  margin: 0 auto; */}
  ${'' /* background-color:#E9E9E9;
   box-shadow: -2px 1px 22px 1px rgba(18,110,33,0.71) inset; */}
`;

export const Header = styled.header`
  height: 60px;
  ${'' /* box-shadow: 0 10px 5px 0 rgb(0 0 0 / 60%), 0 2px 5px 0 rgb(0 0 0 /14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);   */}
  ${'' /* box-shadow: -2px 2px 12px 4px rgba(18,110,33,0.77) inset; */}
  ${'' /* box-shadow: -2px 1px 22px 10px rgba(18,110,33,0.79) inset; */}
  box-shadow: -2px 1px 22px 1px rgba(18,110,33,0.71) ;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  ${'' /* background-color: #3C6687; */}
`;

export const Wrapper = styled.div`
   
`

export const Navigation = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 70px;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--color-dark-grey);
  font-weight: 500;

  &.active {
    color: white;
    background-color: var(--color-green);
  }
`;