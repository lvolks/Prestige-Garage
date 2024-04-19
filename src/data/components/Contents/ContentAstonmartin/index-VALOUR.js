import "../Content/contentVariant.css";
import img1 from "../../../images/imagesAstonmartin/valour/1.png"
import img2 from "../../../images/imagesAstonmartin/valour/2.png"
import img3 from "../../../images/imagesAstonmartin/valour/3.png"
import img4 from "../../../images/imagesAstonmartin/valour/4.png"
import img5 from "../../../images/imagesAstonmartin/valour/5.png"

export default function ContentValour() {
    return (
        <div>
        <div className="title">
            <h1>ASNTON MARTIN VALOUR</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 504cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 296km/h</h1>
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
            <img className='image' src={img2}></img>
        </div>

        </div>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img3}></img>
        </div>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data' contenteditable="true">A Porsche 911 GT3 RS não é apenas sobre potência bruta; também é afinada para oferecer um desempenho excepcional em curvas. Sua suspensão esportiva, direção precisa e aerodinâmica refinada trabalham em harmonia para garantir uma aderência excepcional e uma resposta rápida em qualquer tipo de curva.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data' contenteditable="true">Além disso, a Porsche 911 GT3 RS ostenta uma aparência agressiva e distinta, com elementos aerodinâmicos proeminentes e detalhes exclusivos que não só contribuem para a sua performance, mas também a distinguem como uma obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        <div className="carIMG">
            <img className='image' src={img4}></img>
        </div>

        </div>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img5}></img>
        </div>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data' contenteditable="true">Em resumo, a Porsche 911 GT3 RS é a personificação da paixão da Porsche pela excelência técnica e pela emoção pura da condução esportiva. É uma máquina feita para desafiar limites e elevar os padrões do que um carro esportivo pode alcançar.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}