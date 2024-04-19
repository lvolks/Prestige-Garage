import "../Content/content.css";
import { Link } from 'react-router-dom';
import logoGTR from "../../../images/imagesNissan/logo-gtr.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>GTR</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/gtr/r32'>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R32</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/gtr/r33'>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R33</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/gtr/r34'>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R34</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/gtr/r35'>
              <img className="img" class="hvr-grow" src={logoGTR} />
              <h1 className="name">GTR R35</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }