import './Meteorite.scss';

const Meteorite = (props) => {
  const extractYear = (dateString) => {
    try {
      const date = new Date(dateString);
      if (!isNaN(date)) {
        return date.getFullYear().toString();
      }
    } catch (error) {
      console.error('Error parsing date:', error);
    }
    return 'Invalid Date';
  };

  const year = extractYear(props.data.year);

  return (
    <div className='row'>

      <div className='cell name'>
        <div className='label'>Name:</div>
        <div className='element'>{props.data.name}</div>
      </div>
      <div className='cell id'>
        <div className='label'>Id:</div>
        <div className='element'>{props.data.id}</div>
      </div>
      <div className=' cell nametype'>
        <div className='label'>Name Type:</div>
        <div className='element'>{props.data.nametype}</div>
      </div>
      <div className='cell recclass'>
        <div className='label'>Rec Class:</div>
        <div className='element'>{props.data.recclass}</div>
      </div>
      <div className='cell mass'>
        <div className='label'>Mass(g):</div>
        <div className='element'>{props.data.mass}</div>
      </div>
      <div className='cell fall'>
        <div className='label'>Fall:</div>
        <div className='element'>{props.data.fall}</div>
      </div>
      <div className='cell year'>
        <div className='label'>Year:</div>
        <div className='element'>{year}</div>
      </div>
      <div className='cell reclat'>
        <div className='label'>Latitude:</div>
        <div className='element'>{props.data.reclat}</div>
      </div>
      <div className='cell reclong'>
        <div className='label'>Longitude:</div>
        <div className='element'>{props.data.reclong}</div>
      </div>
    </div>
  )
}

export default Meteorite;