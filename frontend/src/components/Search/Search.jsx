import './Search.scss';
import { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setsearchTerm] = useState('');

  const searchMeteorites = () => {
    props.searchMeteorites(searchTerm);
  }

  return (
    <div className='search-container'>
      <input placeholder='Enter search terms'
        onChange={e => setsearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button onClick={searchMeteorites} >SEARCH</button>
    </div>
  )
}

export default Search;