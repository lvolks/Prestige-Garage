import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesFerrari/458/icon.png"
import icon2 from "../../../images/imagesFerrari/enzo/icon.png"
import icon3 from "../../../images/imagesFerrari/f40/icon.png"
import icon4 from "../../../images/imagesFerrari/sf90/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>FERRARI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/ferrari/458italia'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Ferrari 458 Italia</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/ferrari/enzo'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Ferrari Enzo</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/ferrari/f40'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Ferrari F40</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/ferrari/sf90'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Ferrari SF90</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }