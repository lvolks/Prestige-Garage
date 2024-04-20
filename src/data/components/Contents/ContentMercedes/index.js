import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesMercedes/amggt/icon.png"
import icon2 from "../../../images/imagesMercedes/amgone/icon.png"
import icon3 from "../../../images/imagesMercedes/cla45amg/icon.png"
import icon4 from "../../../images/imagesMercedes/slsamg/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>MERCEDES</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/mercedes/amggt'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">Mercedes AMG GT</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mercedes/amgone'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">Mercedes AMG ONE</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mercedes/cla45amg'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">Mercedes CLA 45 AMG</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mercedes/slsamg'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">Mercedes SLS AMG</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }