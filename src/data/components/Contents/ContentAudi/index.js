import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoA from "../../../images/logo-audi.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>AUDI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoA} />
              <h1 className="name">Audi RS7 Coupé</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoA} />
              <h1 className="name">Audi RS7 Coupé</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoA} />
              <h1 className="name">Audi RS7 Coupé</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoA} />
              <h1 className="name">Audi RS7 Coupé</h1>
            </Link>
          </div>
        </div>
      </div>
    )
  }