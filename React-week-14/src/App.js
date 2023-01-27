import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/color">Color</Link>
        <Link to="/count">Counter</Link>
        <Link to="/sample">Sample</Link>
        <Link to="/word">Word</Link>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
