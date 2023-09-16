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
        <p>Name</p>
        <p>Id</p>
        <p>Name Type</p>
        <p>Rec Class</p>
        <p>Mass(g)</p>
        <p>Fall</p>
        <p>Year</p>
        <p>Latitude</p>
        <p>Longitude</p>
      </div>
      <div>
          {renderMeteorites()}
      </div>
    </>
  )
  
}

export default Table;
