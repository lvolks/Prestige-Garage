import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoB from "../../../images/imagesBugatti/logo-bugatti.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>BUGATTI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/bugatti/bolide'>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Bolide</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bugatti/chiron'>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Chiron</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bugatti/veyron'>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Veyron</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bugatti/divo'>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Divo</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }