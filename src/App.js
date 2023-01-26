import "./App.css";
import Main from "./Components/Main";
import MyPokemonList from "./Components/MyPokemonList";
import "./Components/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/mypokemonlist" element={<MyPokemonList />} />
      </Routes>
    </Router>
  );
}

export default App;
