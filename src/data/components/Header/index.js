import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="container">
            <header>
                <ul>
                <Link class="hvr-grow hvr-float-shadow" to='/home'>
                Início
                </Link>
                <Link class="hvr-grow hvr-float-shadow" to='/cars'>
                Testing
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