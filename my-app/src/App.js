import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <nav>
        <h1> Word Search</h1>
      </nav>
      <div className="board " id="grid-container">
        {Grid(5, 5)}
      </div>
      <Keyboard />
    </div >
  );
}

export default App;
