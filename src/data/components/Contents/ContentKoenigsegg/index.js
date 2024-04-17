import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoK from "../../../images/logo-koenigsegg.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>KOENIGSEGG</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoK} />
              <h1 className="name">Koenigsegg Agera RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoK} />
              <h1 className="name">Koenigsegg Agera RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoK} />
              <h1 className="name">Koenigsegg Agera RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoK} />
              <h1 className="name">Koenigsegg Agera RS</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }