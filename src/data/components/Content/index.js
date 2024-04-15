import "./content.css";
import { Link } from 'react-router-dom';
import logoP from "../../images/logo-porsche.png"
import logoF from "../../images/logo-ferrari.png"
import logoM from "../../images/logo-mercedes.png"
import logoL from "../../images/logo-lamborghini.png"
import logoA from "../../images/logo-audi.png"
import logoG from "../../images/logo-gtr.png"
import logoMc from "../../images/logo-mclaren.png"
import logoC from "../../images/logo-corvette.png"
import logoH from "../../images/logo-hennessey.png"
import logoB from "../../images/logo-bugatti.png"
import logoK from "../../images/logo-koenigsegg.png"
import logoT from "../../images/logo-toyota.png"
import background from "../../images/garage.png"

export default function Content() {

  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

    return (
      <div class="container" style={containerStyle}>
        <div className="title">
          <h1>MEET THE FAMOUS COMPANYS</h1>
        </div>
        <div class="companys">
          <Link to='/ferrari'>
          <img className="img" class="hvr-grow" src={logoF} />
          </Link>
          <Link to='/porsche'>
          <img className="img" class="hvr-grow" src={logoP} />
          </Link>
          <Link to='/mercedes'>
          <img className="img" class="hvr-grow" src={logoM} />
          </Link>
          <Link to='/lamborghini'>
          <img className="img" class="hvr-grow" src={logoL} />
          </Link>
        </div>
        <div class="companys">
          <Link to='/ferrari'>
          <img className="img" class="hvr-grow" src={logoMc} />
          </Link>
          <Link to='/porsche'>
          <img className="img" class="hvr-grow" src={logoK} />
          </Link>
          <Link to='/mercedes'>
          <img className="img" class="hvr-grow" src={logoH} />
          </Link>
          <Link to='/lamborghini'>
          <img className="img" class="hvr-grow" src={logoG} />
          </Link>
        </div>
        <div class="companys">
          <Link to='/ferrari'>
          <img className="img" class="hvr-grow" src={logoB} />
          </Link>
          <Link to='/porsche'>
          <img className="img" class="hvr-grow" src={logoA} />
          </Link>
          <Link to='/mercedes'>
          <img className="img" class="hvr-grow" src={logoC} />
          </Link>
          <Link to='/lamborghini'>
          <img className="img" class="hvr-grow" src={logoT} />
          </Link>
        </div>
      </div>
    )
  }