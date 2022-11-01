import PropTypes from 'prop-types';
import {TfiSearch} from "react-icons/tfi";
import {
  Form,
  Input,
  SubmitBtn,
  ButtonLabel

} from './Search.styled';

export const Search = ({onSubmit}) => {
  return (
    <Form onSubmit={e => onSubmit(e)} >
        <Input 
          type="text"
          name="query"
          placeholder='Type name of movie'  
        />
      <SubmitBtn>
        <TfiSearch/>
          <ButtonLabel>
            Search
          </ButtonLabel>
        </SubmitBtn>
      </Form>
  )
}

Search.propTypes = {
    onSubmit: PropTypes.func,
}

