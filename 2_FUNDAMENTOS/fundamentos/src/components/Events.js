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
    return(
        <div>
            <div>
                {/*Caso use o handle como função ( handle() ) ele vai executar a função antes do evento acontecer*/}
                <button onClick={handleMyEvent} >Clique aqui</button>
            </div>
        </div>
    )
}

export default Events