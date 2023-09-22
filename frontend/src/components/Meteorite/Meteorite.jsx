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

      <div className='name'>
        <span>Name:</span>
        {props.data.name}
      </div>
      <div className='id'>{props.data.id}</div>
      <div className='nametype'>{props.data.nametype}</div>
      <div className='recclass'>{props.data.recclass}</div>
      <div className='mass'>{props.data.mass}</div>
      <div className='fall'>{props.data.fall}</div>
      <div className='year'>{year}</div>
      <div className='reclat'>{props.data.reclat}</div>
      <div className='reclong'>{props.data.reclong}</div>
    </div>
  )
}

export default Meteorite;