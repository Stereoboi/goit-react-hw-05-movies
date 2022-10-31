import PropTypes from 'prop-types';

export const Search = ({onSubmit}) => {
  return (
    <form onSubmit={e => onSubmit(e)} >
        <input 
          type="text"
          name="query"  
        />
        <button>search</button>
      </form>
  )
}

Search.propTypes = {
    onSubmit: PropTypes.func,
}