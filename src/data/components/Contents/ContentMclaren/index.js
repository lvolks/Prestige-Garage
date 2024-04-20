import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesMclaren/570s/icon.png"
import icon2 from "../../../images/imagesMclaren/720s/icon.png"
import icon3 from "../../../images/imagesMclaren/p1/icon.png"
import icon4 from "../../../images/imagesMclaren/senna/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>MCLAREN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/mclaren/570s'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">MClaren 570s</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mclaren/720s'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">MClaren 720s</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mclaren/p1'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">MClaren P1</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/mclaren/senna'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">MClaren Senna</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }