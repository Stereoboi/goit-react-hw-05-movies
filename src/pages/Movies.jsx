import { useState, useEffect } from 'react';
import { fetchFilmsByQuery } from 'api/api';
import {  Link, useSearchParams, useLocation } from 'react-router-dom';
import { Search } from 'components/SearchBar/Search';

const Movies = () => {

  
  const [searchResults, setSearchResults] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const search = searchParams.get("name") ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    
    setSearchParams({ name: e.target.elements.query.value })
    
  };

  useEffect(() => {
   if (!search) return
   
   const getFetch = async () => {
      try {
        const result = await fetchFilmsByQuery(search);
        console.log(result);
        setSearchResults(result)
      } catch (err) {
        // console.log('error');
      }
    }
    getFetch();
  }, [search, searchParams])

  // const changeURLParameter = value => {
  //   setSearchParams (value !== '' ? {name: value}: {})
  // }
  

  return (
    <>
      <h1>Movies</h1>
      <Search
        onSubmit={handleSubmit}
        // onChange={changeURLParameter} 
        value={search}
        />
      {/* <form onSubmit={handleSubmit} >
        <input type="text"
          name="query"
          onChange={e => changeURLParameter(e.target.value)}
          value={search}
        />
        <button>search</button>
      </form> */}
      {searchResults && (
        <ul>
        {searchResults.map(el => (
          <li key={el.id}>
            <Link to={`${el.id}`} state={{ from: location }}>
                <p>{el.name || el.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      )}
    </>
  );
};

export default Movies