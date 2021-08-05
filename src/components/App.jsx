import React, { useState } from "react";


function App() {

  const [headingText, setHeadingText] = useState("")
  const [isMouseOver, setMouseOver] = useState(false)

  const [name, setName] = useState("")

  function handleClick() {

    setHeadingText(name);

    event.preventDefault();
  }

  function handleMouseOver() {

    setMouseOver(true)
  }

  function handleMouseOut() {

    setMouseOver(false)
  }

  function handleChange(){

    setName(event.target.value)
  }
  
  return (
    <div className="container">
      <h1>Hello! {headingText} {name}</h1>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} value={name} type="text" placeholder="What's your name?" />
        <button style={{ backgroundColor: isMouseOver ? "black" : "white"  }} 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        type="submit">
        
        Submit</button>
      </form>
    </div>
  );
}

export default App;


