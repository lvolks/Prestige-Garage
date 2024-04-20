import "../Content/contentVariant.css";
import img1 from "../../../images/imagesAudi/rs6/1.png"
import img2 from "../../../images/imagesAudi/rs6/2.png"
import img3 from "../../../images/imagesAudi/rs6/3.png"
import img4 from "../../../images/imagesAudi/rs6/4.png"
import img5 from "../../../images/imagesAudi/rs6/5.png"

export default function ContentRS6() {
    return (
        <div>
        <div className="title">
            <h1>AUDI RS6 AVANT</h1>
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
            <h1 class='data'>O Audi RS6 é uma obra-prima de desempenho e utilidade, combinando a potência e dinâmica de um supercarro com a praticidade de uma perua de luxo. Desde seu lançamento, o RS6 tem sido aclamado por sua capacidade de oferecer uma experiência de condução emocionante e versátil, adaptando-se perfeitamente a qualquer situação, desde viagens familiares até momentos de pura adrenalina. Também conhecido omo um dos modelos mais emblemáticos da linha RS da Audi.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Audi RS6 apresenta um design agressivo e distintivo que o diferencia dos demais. Com sua postura musculosa, linhas aerodinâmicas e detalhes exclusivos, o RS6 emana uma presença poderosa e atlética. Elementos como a grade dianteira em forma de colmeia, os para-choques dianteiros e traseiros proeminentes e as saídas de escape ovais enfatizam a natureza esportiva e agressiva do RS6.</h1>
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
            <h1 class='data'>Equipado com um motor V8 biturbo de alta performance, o Audi RS6 oferece um desempenho imponente que desafia os limites da velocidade e da agilidade. Com mais de 600 cavalos de potência e um torque abundante, o RS6 é capaz de acelerar de 0 a 100 km/h em menos de 4 segundos, proporcionando uma experiência de condução emocionante e visceral. Sua tração integral quattro e suspensão esportiva adaptativa garantem uma dirigibilidade precisa e confiável em uma variedade de condições de estrada.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Audi RS6 oferece um ambiente luxuoso e tecnologicamente avançado, onde cada detalhe foi cuidadosamente projetado para proporcionar conforto e conveniência. Materiais premium, como couro Valcona, alumínio escovado e fibra de carbono, criam uma atmosfera de sofisticação e requinte. Recursos como o sistema de infoentretenimento MMI touch, o Audi virtual cockpit e os assistentes de condução semiautônoma garantem uma experiência de condução conectada e indulgente.</h1>
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
            <h1 class='data'>O Audi RS6 é mais do que apenas uma perua; é um ícone de desempenho familiar que desafia as convenções e redefine o que é possível em um veículo de passeio. Sua combinação de potência bruta, praticidade inteligente e luxo refinado o torna um companheiro ideal para qualquer aventura, seja no dia a dia ou em viagens emocionantes. Como uma manifestação do compromisso da Audi com a excelência e a inovação, o RS6 continua a ser um dos modelos mais cobiçados e admirados em sua classe.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}