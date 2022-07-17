//Template Expressions 
        //Template expressions é o recurso do react que nos permite executar javascript  no JSX
        // Uma Template Expression é representada pelos caracteres {}

const TemplateExpressions = () => {
    const name = "pedrinho"
    const data = {
        age: 22,
        job: "Programador",
    }

    return(
        <div>
            {/*Colocando o conteudo da variavel nome na template expression*/}
            <h1>Olá,{name}. Tudo bem?</h1>
            <p>Você atua como {data.job}</p>
            {/*Logando com a temlate expression*/}
            <p>{console.log("Log com o JSX do react")}</p>
        </div>
    )
}


export default TemplateExpressions