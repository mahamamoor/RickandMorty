const Characters = (props) => {
  return (
    <div id="characters">
      <hr/>
      <p id="name">{props.characters.name}</p>
      <img id="image" src={props.characters.image}/>
    </div>
  )
}

export default Characters
