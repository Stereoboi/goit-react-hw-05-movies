import { useState, useEffect } from 'react';
import { fetchFilmsByQuery } from 'api/api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Search } from 'components/SearchBar/Search';
import {
  LinkItem,
  Text,
  ListItem,
  Title,
  List,
  Wrapper
} from './Movies.styled';

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
        setSearchResults(result)
      } catch (err) {
        // console.log('error');
      }
    }
    getFetch();
  }, [search, searchParams])

  return (
    <Wrapper>
      <Title>Movies</Title>
      <Search
        onSubmit={handleSubmit}
        value={search}
        />
      {searchResults && (
        <List>
        {searchResults.map(el => (
          <ListItem key={el.id}>
            <LinkItem to={`${el.id}`} state={{ from: location }}>
                <Text>{el.name || el.title}</Text>
            </LinkItem>
          </ListItem>
        ))}
      </List>
      )}
    </Wrapper>
  );
};

export default Movies