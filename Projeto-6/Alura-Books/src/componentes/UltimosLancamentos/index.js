import { livros } from "./dadosUltimosLancamentos"

function UltimosLancamentos() {
    return (
        <section>
            <h2>Ultimos Lançamentos</h2>
            {livros.map(livro => (
                <img src={livro.src} />
            ))}
        </section>
    )
}

export default UltimosLancamentos