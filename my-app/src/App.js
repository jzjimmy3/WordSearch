import "./App.css";
import Keyboard from "./components/Keyboard";
import Grid from "./components/Grid";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <nav>
        <h1> Word Search</h1>
      </nav>
      <div className="board " id="grid-container">
        {Grid(10, 10)}
      </div>
      <SearchBar />
      <Keyboard />
    </div>
  );
}

export default App;
