import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoB from "../../../images/logo-bugatti.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>BUGATTI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Bolide</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Bolide</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Bolide</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoB} />
              <h1 className="name">Bugatti Bolide</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }