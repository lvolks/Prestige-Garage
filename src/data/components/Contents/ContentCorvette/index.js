import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesCorvette/c8/icon.png"
import icon2 from "../../../images/imagesCorvette/victory/icon.png"
import icon3 from "../../../images/imagesCorvette/z06/icon.png"
import icon4 from "../../../images/imagesCorvette/zr1/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>CORVETTE</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/corvette/c8'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Corvette C8</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/corvette/victory'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Corvette Victory</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/corvette/z06'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Corvette Z06</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/corvette/zr1'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Corvette ZR1</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }