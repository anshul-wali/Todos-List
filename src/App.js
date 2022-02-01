import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from "react";
function App() {
  const onDelete = (todo) => {
    // console.log("i am ondelete todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    { sno: 1, title: "go to the market", desc: "get this job done1" },
    { sno: 2, title: "go to the ghat", desc: "get this job done2" },
    { sno: 3, title: "go to the mall", desc: "get this job done3" },
  ]);
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
