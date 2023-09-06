import './Meteorite.scss';

const Meteorite = (props) => {

  return (
    <>
      <div>{props.data.id}</div>
      <div>{props.data.name}</div>
    </>
  )
}

export default Meteorite;