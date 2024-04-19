import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoF from "../../../images/imagesFerrari/logo-ferrari.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>FERRARI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/ferrari/458italia'>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari 458 Italia</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/ferrari/enzo'>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari Enzo</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/ferrari/f40'>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari F40</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/ferrari/sf90'>
              <img className="img" class="hvr-grow" src={logoF} />
              <h1 className="name">Ferrari SF90</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }