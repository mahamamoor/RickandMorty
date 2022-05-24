const Characters = (props) => {
  return (
    <div>
      <hr/>
      <p>{props.characters.name}</p>
      <img src={props.characters.image}/>
    </div>
  )
}

export default Characters
