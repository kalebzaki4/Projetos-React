import { styled } from "styled-components"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Famosos</a></li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral