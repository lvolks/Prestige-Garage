import "./footer.css";
import { Link } from 'react-router-dom';
import iconG from '../../images/icon-github.png'
import iconI from '../../images/icon-instagram.png'
import iconL from '../../images/icon-linkedin.png'
import iconT from '../../images/icon-twitter.png'

export default function Footer() {
    return (
        <div class="container">
            <footer>
            <div className="all">
                <div className="copy">
                    <h1>A project made by Lucas Volkweis</h1>
                </div>
                <div>
                    <Link to='https://github.com/lvolks' target="_blank">
                        <img className="icon" src={iconG}></img>
                    </Link>
                </div>
                <div>
                    <Link to='https://www.linkedin.com/in/lucas-volkweis-54b9a1278/' target="_blank">
                        <img className="icon" src={iconL}></img>
                    </Link>
                </div>
                <div>
                    <Link to='https://www.instagram.com/lukas.volks/' target="_blank">
                        <img className="icon" src={iconI}></img>
                    </Link>
                </div>
                <div>
                <Link to='https://twitter.com/lukas_volks' target="_blank">
                        <img className="icon" src={iconT}></img>
                    </Link>
                </div>
                <div className="copy2">
                    <h1>professionalvolks@gmail.com</h1>
                </div>
            </div>
            </footer>
        </div>
    )
}