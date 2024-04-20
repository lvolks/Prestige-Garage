import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesKoenigsegg/agera/icon.png"
import icon2 from "../../../images/imagesKoenigsegg/regera/icon.png"
import icon3 from "../../../images/imagesKoenigsegg/ccxr/icon.png"
import icon4 from "../../../images/imagesKoenigsegg/jesko/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>KOENIGSEGG</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/koenigsegg/agera'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Koenigsegg Agera RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/koenigsegg/regera'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Koenigsegg Regera</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/koenigsegg/ccxr'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Koenigsegg CCXR</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/koenigsegg/jesko'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Koenigsegg Jesko</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }