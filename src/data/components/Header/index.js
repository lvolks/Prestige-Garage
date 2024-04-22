import "./header.css";
import { Link } from 'react-router-dom';
import close from "../../images/icon-close.png"

export default function Header() {
    return (
        <div className="container">
            <header>
                <ul>
                <Link class="hvr-grow hvr-float-shadow" to='/home'>
                Início
                </Link>
                <Link class="hvr-grow hvr-float-shadow" to='/dev'>
                Desenvolvedor
                </Link>
                </ul>
                <a className="logo" href="home">PRESTIGE GARAGE</a>
                <ul>
                <Link class="hvr-grow hvr-float-shadow" to='/about'>
                Sobre
                </Link>
                <Link class="hvr-grow hvr-float-shadow" to='/contact'>
                Contato
                </Link>
                </ul>                
            </header>
        </div>
    )
}