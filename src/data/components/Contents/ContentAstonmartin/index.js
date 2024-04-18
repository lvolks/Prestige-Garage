import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoT from "../../../images/logo-astonmartin.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>ASTON MARTIN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Supra MK5</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Supra MK5</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Supra MK5</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Supra MK5</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }