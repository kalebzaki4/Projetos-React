import { useState } from "react"


function Pesquisa() {
    const [LivrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Ja sabe né?</Titulo>
            <Subtitulo>Procura ai bobao</Subtitulo>
            <input placeholder="escreve ai bobao" onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes.setLivrosPesquisados(resultadoPesquisa))
            }} />
            {LivrosPesquisados.map(livro => (
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </div>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa