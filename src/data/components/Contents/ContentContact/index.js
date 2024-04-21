import "./contentContact.css";
import mail from "../../../images/icon-gmail.png"
import github from "../../../images/icon-github.png"
import linkedin from "../../../images/icon-linkedin.png"
import instagram from "../../../images/icon-instagram.png"
import { Link } from 'react-router-dom';

export default function ContentContact(){
    return(
        <div>
            <div className="title">
                <h1>GOSTARIA DE FALAR COMIGO?</h1>
            </div>
            <div className="contact">
                <div className="contactMe">
                    <div>
                        <img src={mail} className="iconMail"></img>
                    </div>
                    <div>
                        <h1 className="sendEmail">Me mande um e-mail.</h1>
                        <h1 className="sendEmail2">professionalvolks@gmail.com</h1>
                    </div>
                </div>
                <div className="contactMe">
                    <div>
                        <Link to="https://github.com/lvolks" target="_blank">
                        <img src={github} className="iconMail"></img>
                        </Link>
                    </div>
                    <div>
                        <h1 className="github">Acesse meu Github.</h1>
                        
                    </div>
                </div>
                <div className="contactMe">
                    <div>
                        <Link to="https://www.linkedin.com/in/lucas-volkweis-54b9a1278/" target="_blank">
                        <img src={linkedin} className="iconMail"></img>
                        </Link>
                    </div>
                    <div>
                        <h1 className="linkedin">Acesse meu LinkedIn.</h1>
                    </div>
                </div>
                <div className="contactMe">
                    <div>
                        <Link to="https://www.instagram.com/lukas.volks/" target="_blank">
                        <img src={instagram} className="iconMail"></img>
                        </Link>
                    </div>
                    <div>
                        <h1 className="instagram">Acesse meu Instagram.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}