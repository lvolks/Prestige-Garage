import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesAstonmartin/vulcan/icon.png"
import icon2 from "../../../images/imagesAstonmartin/vantage/icon.png"
import icon3 from "../../../images/imagesAstonmartin/valkyrie/icon.png"
import icon4 from "../../../images/imagesAstonmartin/db11/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>ASTON MARTIN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/astonmartin/vulcan'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Aston Martin Vulcan</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/astonmartin/vantage'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Aston Martin Vantage</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/astonmartin/valkyrie' >
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Aston Martin Valkyrie</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/astonmartin/db11'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Aston Martin DB11</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }