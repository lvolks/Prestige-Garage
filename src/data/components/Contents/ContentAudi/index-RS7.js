import img from '../../../images/logo-audi.png'
import "../Content/contentVariant.css";

export default function ContentRS7() {
    return (
        <div>
        <div className="title">
            <h1>AUDI RS7 SPORTBACK</h1>
        </div>

        <div className='ev'>

        <div className='section'>

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
            <h1 class='data' contenteditable="true">Como o próprio nome indica, o Audi RS7 Sportback tem como base o A7 Sportback. Logo, um dos destaques é a carroceria no formato cupê com quatro portas. Ele se sobressai frente aos demais pelo caimento suave do teto até a traseira, formando praticamente dois-volumes ao invés de três.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

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