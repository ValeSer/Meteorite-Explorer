import './Meteorite.scss';

const Meteorite = (props) => {

  return (
    <>
      <div>{props.data.name}</div>
      <div>{props.data.id}</div>
      <div>{props.data.nametype}</div>
      <div>{props.data.mass}</div>
      <div>{props.data.fall}</div>
      <div>{props.data.recclass}</div>
      <div>{props.data.reclat}</div>
      <div>{props.data.reclong}</div>
      <div>{props.data.year}</div>
    </>
  )
}

export default Meteorite;