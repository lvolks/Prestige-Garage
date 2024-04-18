import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoP from "../../../images/logo-porsche.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>PORSCHE</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/porsche/gt3rs'>
              <img className="img" class="hvr-grow" src={logoP} />
              <h1 className="name">Porsche 911 GT3 RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/porsche/carreraGT'>
              <img className="img" class="hvr-grow" src={logoP} />
              <h1 className="name">Porsche Carrera GT</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoP} />
              <h1 className="name">Porsche 911 GT3 RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoP} />
              <h1 className="name">Porsche 911 GT3 RS</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }