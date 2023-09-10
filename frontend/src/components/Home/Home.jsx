import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table/Table';

const Home = () => {
  const [meteorites, setMeteorites] = useState([]);
  
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
      
      <Table meteorites={meteorites}/>
    </>
  )
}

export default Home;