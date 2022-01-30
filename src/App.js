import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
function App() {
  return (
    <div classNameName="App">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
