import "./content.css";
import { Link } from 'react-router-dom';
import logoP from "../../../images/logo-porsche.png"
import logoF from "../../../images/logo-ferrari.png"
import logoM from "../../../images/logo-mercedes.png"
import logoL from "../../../images/logo-lamborghini.png"
import logoA from "../../../images/logo-audi.png"
import logoG from "../../../images/logo-gtr.png"
import logoMc from "../../../images/logo-mclaren.png"
import logoC from "../../../images/logo-corvette.png"
import logoBMW from "../../../images/logo-bmw.png"
import logoB from "../../../images/logo-bugatti.png"
import logoK from "../../../images/logo-koenigsegg.png"
import logoT from "../../../images/logo-toyota.png"

export default function Content() {

    return (
      <div class="container">
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
          <Link to='/mclaren'>
          <img className="img" class="hvr-grow" src={logoMc} />
          </Link>
          <Link to='/koenigsegg'>
          <img className="img" class="hvr-grow" src={logoK} />
          </Link>
          <Link to='/bmw'>
          <img className="img" class="hvr-grow" src={logoBMW} />
          </Link>
          <Link to='/gtr'>
          <img className="img" class="hvr-grow" src={logoG} />
          </Link>
        </div>
        <div class="companys">
          <Link to='/bugatti'>
          <img className="img" class="hvr-grow" src={logoB} />
          </Link>
          <Link to='/audi'>
          <img className="img" class="hvr-grow" src={logoA} />
          </Link>
          <Link to='/corvette'>
          <img className="img" class="hvr-grow" src={logoC} />
          </Link>
          <Link to='/toyota'>
          <img className="img" class="hvr-grow" src={logoT} />
          </Link>
        </div>
      </div>
    )
  }