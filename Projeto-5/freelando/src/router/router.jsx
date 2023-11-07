import { createBrowserRouter } from "react-router-dom"
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBase from "../paginas/LayoutBase";
import PaginaInicial from "../paginas/PaginaInicial"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path:'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'cliente',
                        element: <h1>Interesesses</h1>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1>Dados pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1>Concluído</h1>
                    }
                ]
            }
        ],
    },
]);