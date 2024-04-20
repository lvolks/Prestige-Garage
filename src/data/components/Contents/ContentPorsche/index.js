import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesPorsche/gt3rs/icon.png"
import icon2 from "../../../images/imagesPorsche/carreragt/icon.png"
import icon3 from "../../../images/imagesPorsche/911turbos/icon.png"
import icon4 from "../../../images/imagesPorsche/918spyder/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>PORSCHE</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/porsche/gt3rs'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Porsche 911 GT3 RS</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/porsche/carreraGT'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Porsche Carrera GT</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/porsche/911turbos'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Porsche 911 Turbo S</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/porsche/918spyder'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Porsche 918 Spyder</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }