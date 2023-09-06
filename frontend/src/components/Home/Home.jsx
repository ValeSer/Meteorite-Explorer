import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [meteorites, setMeteorites] = useState('');

  useEffect(() => {
      axios.get('http://localhost:8080')
        .then((response) => {
          //if(response.status !== 200)throw new Error('Failed to fetch');
          setMeteorites(response.data[0].name);
          console.log('data from API', response.data)
        })
        .catch(error => {
          console.error('error', error);
        });
  }, []);
   

  return (
    <>
      <div>
        {meteorites}
      </div>
      
    </>
  )
}

export default Home;