import logo from './logo.svg';

//components
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from './components/TemplateExpressions';

//styles | css
import './App.css';

//Index.html -> fundamentos (página home)
function App() {
  return (
    // ==== CODIGO AQUI  ====
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
    </div>
  );
}

export default App;

