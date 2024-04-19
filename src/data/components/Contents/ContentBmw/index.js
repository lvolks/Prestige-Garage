import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoBMW from "../../../images/imagesBmw/logo-bmw.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>BMW</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/bmw/m8'>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW M8</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bmw/320i'>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW 320i</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bmw/i8'>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW i8</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/bmw/z4'>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW Z4</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }