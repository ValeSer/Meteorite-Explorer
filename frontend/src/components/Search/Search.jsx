import './Search.scss';
import { useState } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');

  const searchMeteorites = () => {
    props.searchMeteorites(query);
  }

  return (
    <div className='search-container'>
      <input placeholder='Enter search terms'
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={searchMeteorites} >SEARCH</button>
    </div>
  )
}

export default Search;