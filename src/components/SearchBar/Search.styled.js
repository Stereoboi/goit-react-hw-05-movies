import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  color: orangered;
  background-color: transparent;
  transition: border-color 250ms ease-in-out;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: grey;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }
  &:focus {
    border-color: orangered;
    &::placeholder {
      opacity: 1;
      transition-delay: 250ms;
    }
  }
`;
export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SubmitBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color:orangered;
  }
  & svg {
    width: 24px;
    height: 24px;
  }
  &::placeholder {
  font-family: inherit;
  font-size: 100%;
`;