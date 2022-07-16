import logo from './logo.svg';

//components
import FirstComponent from "./components/FirstComponent"

//styles | css
import './App.css';

//Index.html -> fundamentos (página home)
function App() {
  return (
    // ==== CODIGO AQUI  ====
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
    </div>
  );
}

export default App;

