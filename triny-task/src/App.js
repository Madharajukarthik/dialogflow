import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...!!!");
  const [list, setList] = useState([]);
  useEffect( () => {
    axios.get("http://localhost:8000")
    .then( (res) => {
      setMessage("Success");
      setList(res.data);
    })
    .catch(err => {
      console.log(err);
      setMessage("Failed");
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="color">Dialogflow Intent</h1>
        <div className="color">
          {message}
          {list.map( (intent, index) => (
            <div className="intent" key={index}>{intent.displayName}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
