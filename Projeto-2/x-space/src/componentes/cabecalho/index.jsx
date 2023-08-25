import logo from './logo.png'
import search from './search.png'
import styles from './cabecalho.module.scss'

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do X space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"/>
                <img src={search} alt="icone de busca" />
            </div>
        </header>
    )
}