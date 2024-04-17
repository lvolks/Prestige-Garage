import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoM from "../../../images/logo-mclaren.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>MCLAREN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren 720s</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren 720s</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren 720s</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren 720s</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }