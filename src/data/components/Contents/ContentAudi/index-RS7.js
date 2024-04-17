import img from '../../../images/logo-audi.png'
import "../Content/contentVariant.css";

export default function ContentRS7() {
    return (
        <div>
        <div className="title">
            <h1>AUDI RS7 COUPÉ</h1>
        </div>

        <div className='ev'>

        <div className='container'>

        <div className="carIMG">
            <img className='image' src={img}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h in 2s</h1>
        </div>

        <div>
            <h1 className='description'>HP(Horse Power): 504hp</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data' contenteditable="true">MSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFH</h1>
        </div>

        </div>

        </div>

        <div className='container'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data' contenteditable="true">MSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFHMSDIFOSDHJAFOUSDHFUDISAHFSADUIFHSDAFIUDHSAFUISDAHFDISUAHFSADUIFH</h1>
        </div>

        </div>

        <div className="carIMG">
            <img className='image' src={img}></img>
        </div>

        </div>

        </div>

        </div>
    )
}