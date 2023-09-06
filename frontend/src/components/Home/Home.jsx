import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [meteorites, setMeteorites] = useState([]);

  const renderMeteorites = () => {
    return (
      <div className='met-table-container'>
        {
          meteorites.map((met) => {
            return (
              <div key={met.id}>
                {met.name}
              </div>
            
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