import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesAudi/rs6/icon.png"
import icon2 from "../../../images/imagesAudi/rs7/icon.png"
import icon3 from "../../../images/imagesAudi/r8/icon.png"
import icon4 from "../../../images/imagesAudi/a6/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>AUDI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs6'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Audi RS6</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Audi RS7 Fastback</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/audi/r8'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Audi R8</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/audi/a6'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Audi A6</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }