import logo from './logo.svg';

//components
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events'
import Challenge from './components/Challenge'

//styles | css
import './App.css';

//Index.html -> fundamentos (página home)
function App() {
  return (
    // ==== CODIGO AQUI  ====
    /* Um componente é criado pra ser reaproveitado */
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      {/*Componente reaproveitado*/}
      <MyComponent></MyComponent>
      <Events></Events>
      <Challenge></Challenge>
    </div>
  );
}

export default App;

