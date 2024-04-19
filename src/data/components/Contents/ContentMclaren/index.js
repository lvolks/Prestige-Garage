import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoM from "../../../images/imagesMclaren/logo-mclaren.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>MCLAREN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/mclaren/570s'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren 570s</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mclaren/720s'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren 720s</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mclaren/p1'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren P1</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mclaren/senna'>
              <img className="img" class="hvr-grow" src={logoM} />
              <h1 className="name">MClaren Senna</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }