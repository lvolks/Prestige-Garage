import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoC from "../../../images/logo-corvette.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>CORVETTE</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette C8</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette C8</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette C8</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette C8</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }