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
            <Link to='/audi/rs7'>
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