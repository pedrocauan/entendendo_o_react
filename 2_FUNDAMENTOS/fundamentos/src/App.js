import logo from './logo.svg';

//components
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from './components/TemplateExpressions';

//styles | css
import './App.css';
import MyComponent from './components/MyComponent';

//Index.html -> fundamentos (página home)
function App() {
  return (
    // ==== CODIGO AQUI  ====
    /* Um componente é criado pra ser reaproveitado */
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      {/*Um componente irmão ou filho de um componente já importado não precisa ser importado pelo pai */}
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;

