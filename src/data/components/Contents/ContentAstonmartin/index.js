import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoT from "../../../images/imagesAstonmartin/logo-astonmartin.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>ASTON MARTIN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/astonmartin/vulcan'>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Aston Martin Vulcan</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/astonmartin/vantage'>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Aston Martin Vantage</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/astonmartin/valkyrie' >
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Aston Martin Valkyrie</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/astonmartin/valour'>
              <img className="img" class="hvr-grow" src={logoT} />
              <h1 className="name">Aston Martin Valour</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }