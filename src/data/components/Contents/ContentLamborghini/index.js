import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoL from "../../../images/logo-lamborghini.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>LAMBORGHINI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Huracán</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Huracán</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Huracán</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoL} />
              <h1 className="name">Lamborghini Huracán</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }