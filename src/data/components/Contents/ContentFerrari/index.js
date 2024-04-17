import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoF from "../../../images/logo-ferrari.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>FERRARI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari 458 Pista</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari 458 Pista</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari 458 Pista</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari 458 Pista</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }