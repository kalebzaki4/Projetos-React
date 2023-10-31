import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: 'cadastro',
                element: <h1>Seleção de tipo de cliente</h1>,
                children: [
                    {
                        path: 'cliente',
                        element: <h1>interesses</h1>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1>Dados pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1>Concluido</h1>
                    },
                ]
            }
        ],
    },
]);