import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoL from "../../../images/imagesLamborghini/logo-lamborghini.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>LAMBORGHINI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/lamborghini/huracan'>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Huracán</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/lamborghini/sian'>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Sian</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/lamborghini/veneno'>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Veneno</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/lamborghini/Aventador'>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Aventador</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }