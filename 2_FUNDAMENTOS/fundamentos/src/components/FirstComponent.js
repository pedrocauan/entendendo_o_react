
//Componente
const FirstComponent = () => {
    //O que ele vai retornar

    //O JSX  é o html do REACT, nele serão exibidas as tags HTML renderizadas no navegador
    //alguns atributos do CSS podem gerar conflitos com o css e voce terá que trocar
    //Atributos:

    // class | className
    return (
        <div>
            <h1>Titulo</h1>

            <p className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odio quae quasi officia quidem culpa natus voluptate id error tempora provident quis pariatur quia consectetur dolorem iste facilis inventore minus!</p>
        </div>
    )
}

//faz com que ele possa ser usado em outro lugar
export default FirstComponent