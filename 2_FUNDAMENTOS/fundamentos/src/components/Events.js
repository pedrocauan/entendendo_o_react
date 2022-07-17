const Events = () => {
    //Eventos são essenciais para fazer ações no react
    //No react existem eventos ja "prontos"
    //onClick -> Evento de Click
    // A função é criada na propria função do componente
    // por padrao usando o nome HandleAlgumaCoisa

    // e -> dados que o evento contém
    const handleMyEvent = (e) => {
        console.log(`Rodou o evento. Componentes:`)
        console.log(e)
    }
    //Função de renderização
    const renderSomething = (r) => {
        if(r)
            return <h1>Renderiza isso aqui caso verdadeiro</h1>
        else
            return <h1>Renderiza caso falso</h1>
    }
    return(
        <div>
            <div>
                {/*Caso use o handle como função ( handle() ) ele vai executar a função antes do evento acontecer*/}
                <button onClick={handleMyEvent} >Clique aqui</button>
            </div>
            <div>
                {/* Eventos nas funções são usado quando tarefas simples são necessárias ou é preciso fazer mudanças*/}
                <button onClick = { () => console.log("Tu clicou aqui através de uma função rodada no evento da pasta components/Events.js")}>Clique aqui também</button>
                {/*Nestes casos, para facilitar a visualização do html é aconselhavel usar as hanEvents */}
                <button onClick = { () => {
                    if(true)
                        console.log("isso não deveria existir porque é gambiarra =D")
                }}>Clica aqui pfv</button>
            </div>
            {/*Renderiza a função fora do retorno do componente*/}
            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    )
}

export default Events