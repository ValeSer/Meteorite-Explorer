import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Search from '../Search/Search';

const Home = () => {
  const [meteorites, setMeteorites] = useState([]);

  const searchMeteorites = (query) => {
    console.log(query);
  }
  
  useEffect(() => {
      axios.get('http://localhost:8080')
        .then((response) => {
          //if(response.status !== 200)throw new Error('Failed to fetch');
          setMeteorites(response.data);
          console.log('data from API', response.data)
        })
        .catch(error => {
          console.error('error', error);
        });
  }, []);
   

  return (
    <>
      <Search searchMeteorites={searchMeteorites}/>
      <Table meteorites={meteorites}/>
    </>
  )
}

export default Home;