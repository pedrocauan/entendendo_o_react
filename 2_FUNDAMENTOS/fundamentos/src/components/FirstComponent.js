import MyComponent from "./MyComponent"

//Componente
const FirstComponent = () => {
    //O que ele vai retornar

    //O JSX  é o html do REACT, nele serão exibidas as tags HTML renderizadas no navegador
    //alguns atributos do CSS podem gerar conflitos com o css e voce terá que trocar
    //Atributos:
    // class | className

    //Template Expressions 
        //Template expressions é o recurso do react que nos permite executar javascript  no JSX
        // Uma Template Expression é representada pelos caracteres {}

    
    return (
        
        <div>
            {/*Fiz um comentário no elemento html usando as chaves do react*/}
            <h1>Titulo</h1>
            <p className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odio quae quasi officia quidem culpa natus voluptate id error tempora provident quis pariatur quia consectetur dolorem iste facilis inventore minus!</p>
            <MyComponent></MyComponent>
        </div>
    )
}

//faz com que ele possa ser usado em outro lugar
export default FirstComponent