import './Meteorite.scss';

const Meteorite = (props) => {

  return (
    <div className='row'>
      <div className='name'>{props.data.name}</div>
      <div className='id'>{props.data.id}</div>
      <div className='nametype'>{props.data.nametype}</div>
      <div className='mass'>{props.data.mass}</div>
      <div className='fall'>{props.data.fall}</div>
      <div className='recclass'>{props.data.recclass}</div>
      <div className='reclat'>{props.data.reclat}</div>
      <div className='reclong'>{props.data.reclong}</div>
      <div className='year'>{props.data.year}</div>
    </div>
  )
}

export default Meteorite;