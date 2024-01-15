import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
margin-right: 40px;
width: 25px;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            ))}
        </ul>
    )
}

export default IconesHeader