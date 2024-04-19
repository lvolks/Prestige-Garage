import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoC from "../../../images/imagesCorvette/logo-corvette.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>CORVETTE</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/corvette/c8'>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette C8</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/corvette/victory'>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette Victory</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/corvette/z06'>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette Z06</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/corvette/zr1'>
              <img className="img" class="hvr-grow" src={logoC} />
              <h1 className="name">Corvette ZR1</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }