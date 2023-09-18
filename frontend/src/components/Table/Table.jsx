import './Table.scss';
import Meteorite from '../Meteorite/Meteorite'

const Table = (props) => {
   
  const renderMeteorites = () => {
    
    return (
      <div className='met-table-container'>
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
      {renderMeteorites()}
    </>
  )
}

export default Table;
