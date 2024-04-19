import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoM from "../../../images/imagesMercedes/logo-mercedes.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>MERCEDES</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/mercedes/amggt'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">Mercedes AMG GT</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mercedes/amgone'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">Mercedes AMG ONE</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mercedes/cla45amg'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">Mercedes CLA 45 AMG</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mercedes/slsamg'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">Mercedes SLS AMG</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }