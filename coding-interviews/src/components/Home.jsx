import { useState } from "react";
const Home = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const addToDo = () => {
      console.log("I AM HERE")
    if (text) {
      setItems([...items, { text, completed: false }]);
      console.log("items", items)

      setText("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        height: "100vh",
        padding: "12px",
        margin: "12px",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Welcome to my To-Do List
        </h1>
        <p>
          Whe manage and schedule all your task in one place. Click the button
          below to proceed
        </p>
      </div>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Enter your item here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "12px",
            margin: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addToDo}
          style={{
            padding: "12px",
            margin: "12px",
            width: "50%",
            borderRadius: "10px",
            backgroundColor: "blue",
            color: "white",
            fontweight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          + ADD
        </button>
      <ul>
            {items.map((item, index) => {
                  return <li key={index}>{item.text}</li>;
            })}
      </ul>
      </div>
    </div>
  );
};

export default Home;
