import "../Content/contentVariant.css";
import img1 from "../../../images/imagesAudi/r8/1.png"
import img2 from "../../../images/imagesAudi/r8/2.png"
import img3 from "../../../images/imagesAudi/r8/3.png"
import img4 from "../../../images/imagesAudi/r8/4.png"
import img5 from "../../../images/imagesAudi/r8/5.png"

export default function ContentR8() {
    return (
        <div>
        <div className="title">
            <h1>AUDI R8</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 3,4s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 500cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 320km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Audi R8 é o epítome do supercarro de alto desempenho da marca alemã, combinando potência excepcional, design arrojado e tecnologia de ponta. Desde o seu lançamento, o R8 tem sido aclamado por sua capacidade de oferecer uma experiência de condução emocionante e emocionante, enquanto mantém os mais altos padrões de luxo e conforto. Sendo o R8 um dos carros mais emblemáticos da Audi.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Audi R8 apresenta um design futurista e aerodinâmica avançada que o torna instantaneamente reconhecível. Com sua silhueta baixa, linhas afiadas e detalhes distintivos, o R8 transmite uma presença poderosa e atlética. Elementos como a grade dianteira em forma de hexágono, as entradas de ar laterais e o difusor traseiro não apenas melhoram a estética, mas também contribuem para a eficiência aerodinâmica e estabilidade em altas velocidades.</h1>
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
            <h1 class='data'>Equipado com um motor V10 de aspiração natural, o Audi R8 oferece um desempenho de classe mundial que desafia os limites da velocidade e da adrenalina. Com mais de 600 cavalos de potência, o R8 é capaz de acelerar de 0 a 100 km/h em menos de 3 segundos, proporcionando uma experiência de condução emocionante e visceral. Sua transmissão S tronic de dupla embreagem e tração integral quattro garantem uma entrega de potência suave e controle excepcional em todas as condições de condução.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Audi R8 oferece um ambiente de luxo e conforto excepcionais, onde cada detalhe foi cuidadosamente projetado para proporcionar uma experiência de condução premium. Materiais de alta qualidade, como couro fino, fibra de carbono e Alcantara, criam uma atmosfera de sofisticação e requinte. Recursos tecnológicos avançados, como o sistema de infoentretenimento MMI touch, o Audi virtual cockpit e os assistentes de condução avançados, garantem uma experiência de condução conectada e indulgente.</h1>
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
            <h1 class='data'>O Audi R8 é mais do que apenas um carro; é um ícone da engenharia automotiva e um testemunho do compromisso da Audi com a excelência e a inovação. Sua combinação de design deslumbrante, desempenho arrebatador e artesanato meticuloso o torna um dos supercarros mais cobiçados e admirados já produzidos. Como uma obra-prima de engenharia e design, o Audi R8 continua a inspirar paixão e admiração em todos os que têm o privilégio de vê-lo em ação.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}