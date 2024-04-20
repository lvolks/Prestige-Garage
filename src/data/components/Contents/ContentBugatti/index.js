import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesBugatti/bolide/icon.png"
import icon2 from "../../../images/imagesBugatti/chiron/icon.png"
import icon3 from "../../../images/imagesBugatti/veyron/icon.png"
import icon4 from "../../../images/imagesBugatti/divo/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>BUGATTI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/bugatti/bolide'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Bugatti Bolide</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bugatti/chiron'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Bugatti Chiron</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bugatti/veyron'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Bugatti Veyron</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bugatti/divo'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Bugatti Divo</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }