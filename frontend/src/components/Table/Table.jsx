import './Table.scss';
import Meteorite from '../Meteorite/Meteorite'

const Table = (props) => {
   
  const renderMeteorites = () => {
    const orderedMeteorites = props.meteorites.sort((a,b) => (a.name > b.name)  )
    return (
      <div className='met-table-container'>
        {
          orderedMeteorites.map((met) => {
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
    <div>
        {renderMeteorites()}
    </div>
  )
  
}

export default Table;
