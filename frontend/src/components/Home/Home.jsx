import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Meteorite from '../Meteorite/Meteorite';

const Home = () => {
  const [meteorites, setMeteorites] = useState([]);

  const renderMeteorites = () => {
    return (
      <div className='met-table-container'>
        {
          meteorites.map((met) => {
            return (
              <Meteorite 
                key={met.id}
                data={met}
              />
            
            )
          })
        }
      </div>
    )
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
      <div>
        {renderMeteorites()}
      </div>
      
    </>
  )
}

export default Home;