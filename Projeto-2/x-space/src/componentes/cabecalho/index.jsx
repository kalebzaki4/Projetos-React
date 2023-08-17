import logo from './logo.png'
import search from './search.png'

export default function Cabecalho() {
    return(
        <header>
            <img src={logo} alt="Logo do X space" />
            <div>
                <input type="text" placeholder="O que você procura?"/>
                <img src={search} alt="icone de busca" />
            </div>
        </header>
    )
}