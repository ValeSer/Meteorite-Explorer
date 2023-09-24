import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Search from '../Search/Search';
import CircleLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [meteorites, setMeteorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchMeteorites = (searchTerm) => {
    setLoading(true);
    setError(false);
    
    axios.get('http://localhost:8080', {params: {searchTerm: searchTerm}})
        .then((response) => {
          //if(response.status !== 200)throw new Error('Failed to fetch');
          setMeteorites(response.data);
          console.log('data from API', response.data)
        })
        .catch(error => {
          console.error('error', error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
  }
  
  useEffect(() => {
      searchMeteorites('')
  }, []);
   
  return (
    <>
      <h1 className='title'>Meteorite Explorer</h1>
      <div className='home-container'>
        <Search searchMeteorites={searchMeteorites}/>
        <Table meteorites={meteorites}/>
      </div>
      <CircleLoader
          color={'#ffffff'}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
      />
      {error && <div className='error'>Error</div> }
    </>
  )
}

export default Home;
