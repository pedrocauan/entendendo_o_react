import './App.css';
import YellowCalculator from "./assets/aestheticcalc.png"
function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <div>
        {/* Imagem em public */}
        <img src="/aaaacalculadora.png" alt="imagem de uma calculadora aesthetic com fundo rosa" />
      </div>

      {/* Imagens com assets (usadas como se fosse componente) */}
      <div>
        <img src={YellowCalculator} alt="imagem de uma calculadora esthetic com fundo amarelo" />
      </div>
    </div>
  );
}

export default App;
