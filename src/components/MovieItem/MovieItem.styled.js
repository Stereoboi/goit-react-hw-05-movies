import styled from "styled-components";

export const Item = styled.li``;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
  }
  @media screen and (max-width: 767px) {
    min-height: 420px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    min-height: 450px;
  }
  @media screen and (min-width: 1024px) {
    min-height: 310px;
  }
`;

export const TitleH2 = styled.h2`
  min-height: 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: var(--color-dark-grey);
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Genres = styled.p`
  display: inline-block;
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-green);
`;

export const Rating = styled.p`
  min-width: 36px;
  height: 16px;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  color: #ffffff;
  background-color: ${props => {
  if (props.rating <= 4) {
    return `tomato`
  }
  if (props.rating <= 7) {
    return `#F78D05`
  }
  if (props.rating <= 10) {
    return `var(--color-green)`
  }
  } };
`;