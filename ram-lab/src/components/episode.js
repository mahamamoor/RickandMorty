const Episode = (props) => {
  return (
    <div id="episode">
      <hr/>
      <p>{props.episodes.episode}</p>
      <p>{props.episodes.air_date}</p>
      <p>{props.episodes.name}</p>
    </div>
  )
}

export default Episode
