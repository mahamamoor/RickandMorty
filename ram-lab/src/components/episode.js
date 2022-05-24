const Episode = (props) => {
  return (
    <div>
      <hr/>
      <p>{props.episodes.episode}</p>
      <p>{props.episodes.air_date}</p>
      <p>{props.episodes.name}</p>
    </div>
  )
}

export default Episode
