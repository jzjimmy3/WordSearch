import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1> Word Search</h1>
      </nav>
      <div className="center">
        <Board />
        <Keyboard />
      </div>

    </div>
  );
}

export default App;
