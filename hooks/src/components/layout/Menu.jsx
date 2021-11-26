import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li> 
                    <Link to="/conteudo01/123">Logo</Link>
                </li>
                <li> 
                    <Link to="/conteudo02">Sobre</Link>
                </li>                                
                <li> 
                    <Link to="/conteudo03">Detalhes</Link>
                </li>
                <li> 
                    <Link to="/conteudo04">Dados do jogador</Link>
                </li>                                
            </ul>
        </nav>
    </aside>
)
export default Menu
