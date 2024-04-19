import "./content.css";
import { Link } from 'react-router-dom';
import logoP from "../../../images/imagesPorsche/logo-porsche.png"
import logoF from "../../../images/imagesFerrari/logo-ferrari.png"
import logoM from "../../../images/imagesMercedes/logo-mercedes.png"
import logoL from "../../../images/imagesLamborghini/logo-lamborghini.png"
import logoA from "../../../images/imagesAudi/logo-audi.png"
import logoG from "../../../images/imagesNissan/logo-gtr.png"
import logoMc from "../../../images/imagesMclaren/logo-mclaren.png"
import logoC from "../../../images/imagesCorvette/logo-corvette.png"
import logoBMW from "../../../images/imagesBmw/logo-bmw.png"
import logoB from "../../../images/imagesBugatti/logo-bugatti.png"
import logoK from "../../../images/imagesKoenigsegg/logo-koenigsegg.png"
import logoAs from "../../../images/imagesAstonmartin/logo-astonmartin.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>CONHEÇA AS MAIORES MARCAS</h1>
        </div>
        <div class="companys">
          <Link to='/ferrari'>
          <img className="img" class="hvr-grow" src={logoF} />
          <h1 className="name" >FERRARI</h1>
          </Link>
          <Link to='/porsche'>
          <img className="img" class="hvr-grow" src={logoP} />
          <h1 className="name">PORSCHE</h1>
          </Link>
          <Link to='/mercedes'>
          <img className="img" class="hvr-grow" src={logoM} />
          <h1 className="name">MERCEDES-BENS</h1>
          </Link>
          <Link to='/lamborghini'>
          <img className="img" class="hvr-grow" src={logoL} />
          <h1 className="name">LAMBORGHINI</h1>
          </Link>
        </div>
        <div class="companys">
          <Link to='/mclaren'>
          <img className="img" class="hvr-grow" src={logoMc} />
          <h1 className="name">MCLAREN</h1>
          </Link>
          <Link to='/koenigsegg'>
          <img className="img" class="hvr-grow" src={logoK} />
          <h1 className="name">KOENIGSEGG</h1>
          </Link>
          <Link to='/bmw'>
          <img className="img" class="hvr-grow" src={logoBMW} />
          <h1 className="name">BMW</h1>
          </Link>
          <Link to='/gtr'>
          <img className="img" class="hvr-grow" src={logoG} />
          <h1 className="name">NISSAN</h1>
          </Link>
        </div>
        <div class="companys">
          <Link to='/bugatti'>
          <img className="img" class="hvr-grow" src={logoB} />
          <h1 className="name">BUGATTI</h1>
          </Link>
          <Link to='/audi'>
          <img className="img" class="hvr-grow" src={logoA} />
          <h1 className="name">AUDI</h1>
          </Link>
          <Link to='/corvette'>
          <img className="img" class="hvr-grow" src={logoC} />
          <h1 className="name">CORVETTE</h1>
          </Link>
          <Link to='/astonmartin'>
          <img className="img" class="hvr-grow" src={logoAs} />
          <h1 className="name">ASTON MARTIN</h1>
          </Link>
        </div>
      </div>
    )
  }