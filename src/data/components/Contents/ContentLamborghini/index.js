import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesLamborghini/huracan/icon.png"
import icon2 from "../../../images/imagesLamborghini/sian/icon.png"
import icon3 from "../../../images/imagesLamborghini/veneno/icon.png"
import icon4 from "../../../images/imagesLamborghini/aventador/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>LAMBORGHINI</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/lamborghini/huracan'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Lamborghini Huracán</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/lamborghini/sian'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Lamborghini Sian</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/lamborghini/veneno'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Lamborghini Veneno</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/lamborghini/Aventador'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Lamborghini Aventador</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }