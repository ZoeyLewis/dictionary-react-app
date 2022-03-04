import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Dictionary defaultWord="sunset"/>
      <footer>Open-sourced code from <a href="https://github.com/ZoeyLewis/dictionary-react-app" target="/">GitHub</a>, coded by <a href="https://github.com/ZoeyLewis" target="/">Zoey Lewis</a></footer>
    </div>
  );
}

export default App;
