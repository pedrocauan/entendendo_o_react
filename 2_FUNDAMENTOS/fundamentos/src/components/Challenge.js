//Desafio challenge:
// - Crie um componente chamado challenge
// - importe-o para o pai app.js
// - no componente criado faça a criação de dois valores numericos
// - Mostre esses valores no componente
// - Crie um evento de click que some estes valores no console
const Challenge = () => {
    const num1 = 4
    const num2 = 8



    return(
        <div>
            <h1>Desafio Challenge</h1>
            <h2>Número 1: {num1}</h2>
            <h2>Número 2: {num2}</h2>
            <button onClick={(nums) => console.log(`${num1} + ${num2} = ${num1+num2}`) }>Clique aqui</button>
        </div>
    )
}

export default Challenge