import React from "react"
import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [liste, setListe] = React.useState([])


  const onChangeHandler = event => {
     setInputValue(event.target.value);
  };

  const addItem = () => {
    setListe([...liste, inputValue])
    setInputValue([])
  }
  return (

    <div>
      <input
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <button onClick={addItem}>Button</button>

      <h1>{liste}</h1>
    </div>

  );
}

export default App;
