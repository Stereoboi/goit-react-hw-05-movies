import styled from "styled-components";


export const Title = styled.h3`
    font-size: 20px;
    text-transform: uppercase;
`
export const ErrorTitle = styled.h3`
    margin-top:40px;
    font-size: 40px;
    text-transform: uppercase;
`

export const Text = styled.p`
  padding: 20px 0px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
`

export const List = styled.ul`
    ${'' /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px 10px; */}
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  margin-top:25px;
`