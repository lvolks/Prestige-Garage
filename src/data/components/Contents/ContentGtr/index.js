import "../Content/content.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../images/imagesNissan/r32/icon.png"
import icon2 from "../../../images/imagesNissan/r33/icon.png"
import icon3 from "../../../images/imagesNissan/r34/icon.png"
import icon4 from "../../../images/imagesNissan/r35/icon.png"

export default function Content() {

    return (
      <div class="container">
        <div className="title">
          <h1>NISSAN</h1>
        </div>
        <div class="companys">
          <div className="info">
            <Link to='/gtr/r32'>
              <img className="img" class="hvr-grow" src={icon1} />
              <h1 className="name">SKYLINE GTR R32</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/gtr/r33'>
              <img className="img" class="hvr-grow" src={icon2} />
              <h1 className="name">SKYLINE GTR R33</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/gtr/r34'>
              <img className="img" class="hvr-grow" src={icon3} />
              <h1 className="name">SKYLINE GTR R34</h1>
            </Link>
          </div>
          <div className="info">
            <Link to='/gtr/r35'>
              <img className="img" class="hvr-grow" src={icon4} />
              <h1 className="name">SKYLINE GTR R35</h1>
            </Link>
          </div>
        </div>        
      </div>
    )
  }