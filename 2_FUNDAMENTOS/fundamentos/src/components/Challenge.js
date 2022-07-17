//Desafio challenge:
// - Crie um componente chamado challenge
// - importe-o para o pai app.js
// - no componente criado faça a criação de dois valores numericos
// - Mostre esses valores no componente
// - Crie um evento de click que some estes valores no console
const Challenge = () => {
    const num1 = 4
    const num2 = 8
    const somaLog = (e) => {

        console.log(`${num1} + ${num2} = ${num1+num2}`)

    }
   

    return(
        <div className="bg-challenger main-content">
            <h1 className="title">Desafio Challenge</h1>
            <h2>Número 1: {num1}</h2>
            <h2>Número 2: {num2}</h2>
            <button className="btn-content" onClick={somaLog}>Clique aqui</button>
        </div>
    )
}

export default Challenge