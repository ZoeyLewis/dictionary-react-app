import './App.css';
import './Fonts.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">
      Dictionary
      </h1>
      <h2 className="Sub-heading">Discover something new.</h2>
      </header>
      <Dictionary/>
      <footer>Open-sourced code from GitHub, coded by Zoey Lewis</footer>
    </div>
  );
}

export default App;
