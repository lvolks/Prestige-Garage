import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoGTR from "../../../images/logo-gtr.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>GTR</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/audi/rs7'>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R35</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R35</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R35</h1>
            </Link>
          </div>
          <div className="info">
            <Link>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R35</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }