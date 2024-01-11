import logo from '../../Imagens/logo.svg'
import './estilo.css'

function Logo() {
    return (
        <div className='Logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura </strong>Books</p>
        </div>
    )
}

export default Logo