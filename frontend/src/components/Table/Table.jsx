import './Table.scss';
import Meteorite from '../Meteorite/Meteorite'

const Table = (props) => {
   
  const renderMeteorites = () => {
    
    return (
      <div className='met-table-container'>
        
        {
          props.meteorites.map((met) => {
            return (
              <Meteorite 
                data={met}
                key={met.id}
              />
            )
          })
        }
      </div>
    )
  }
  return (
    <>
      <div className='table-header row'>
        header
      </div>
      <div>
          {renderMeteorites()}
      </div>
    </>
  )
  
}

export default Table;
