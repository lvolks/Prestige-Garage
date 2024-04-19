import "../Content/contentVariant.css";
import img1 from "../../../images/imagesPorsche/918spyder/1.png"
import img2 from "../../../images/imagesPorsche/918spyder/2.png"
import img3 from "../../../images/imagesPorsche/918spyder/3.png"
import img4 from "../../../images/imagesPorsche/918spyder/4.png"
import img5 from "../../../images/imagesPorsche/918spyder/5.png"

export default function Content918() {
    return (
        <div>
        <div className="title">
            <h1>PORSCHE 918 SPYDER</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 3,2s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 525cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 296km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data' contenteditable="true">A Porsche 911 GT3 RS é uma máquina de alto desempenho que combina o legado lendário da marca com tecnologia de ponta e engenharia de precisão. Esta versão extrema da icônica série 911 é projetada para entregar uma experiência de condução visceral e emocionante, tanto nas ruas quanto nas pistas.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data' contenteditable="true">Sob o capô, a GT3 RS é impulsionada por um motor de seis cilindros opostos (boxer) naturalmente aspirado, capaz de gerar uma potência impressionante. O som desse motor é uma sinfonia para os entusiastas automotivos, enquanto sua potência oferece uma aceleração intensa e uma experiência de condução verdadeiramente emocionante.</h1>
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