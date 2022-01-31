import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  let todos = [
    { Sno: 1, title: "go to the market", desc: "get this job done1" },
    { Sno: 2, title: "go to the ghat", desc: "get this job done2" },
    { Sno: 3, title: "go to the mall", desc: "get this job done3" },
  ];
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
