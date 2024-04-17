import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoBMW from "../../../images/logo-bmw.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>BMW</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW M4</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW M4</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW M4</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoBMW} />
              <h1 className="name">BMW M4</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }