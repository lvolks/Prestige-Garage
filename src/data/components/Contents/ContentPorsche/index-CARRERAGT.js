import "../Content/contentVariant.css";
import img1 from "../../../images/imagesPorsche/carreragt/1.png"
import img2 from "../../../images/imagesPorsche/carreragt/2.png"
import img3 from "../../../images/imagesPorsche/carreragt/3.png"
import img4 from "../../../images/imagesPorsche/carreragt/4.png"
import img5 from "../../../images/imagesPorsche/carreragt/5.png"

export default function ContentCarreragt() {
    return (
        <div>
        <div className="title">
            <h1>PORSCHE CARRERA GT</h1>
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
            <h1 class='data'>O Porsche Carrera GT é aclamado por seu desempenho excepcional, impulsionado por um motor V10 de 5.7 litros de aspiração natural que produz uma impressionante potência de mais de 600 cavalos. Esta obra-prima da engenharia automotiva atinge uma velocidade máxima de mais de 330 km/h e acelera de 0 a 100 km/h em pouco mais de 3 segundos. Sua transmissão manual de seis velocidades oferece trocas precisas e uma experiência de condução envolvente.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do Carrera GT é uma fusão de elegância e agressividade, com linhas aerodinâmicas fluidas que não apenas proporcionam uma estética deslumbrante, mas também garantem estabilidade em altas velocidades. Sua carroceria é construída em fibra de carbono, proporcionando leveza e rigidez, enquanto o chassi de alumínio contribui para o desempenho ágil e responsivo do veículo. Cada detalhe, desde os faróis distintos até as entradas de ar esculpidas, é cuidadosamente projetado para otimizar o desempenho.</h1>
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
            <h1 class='data'>Ao entrar no cockpit do Carrera GT, o motorista é recebido por um ambiente projetado para proporcionar uma experiência de condução imersiva e envolvente. Os assentos esportivos abraçam o corpo, oferecendo suporte durante manobras agressivas, enquanto o volante revestido em couro transmite feedback preciso da estrada. Cada detalhe do interior, desde os materiais de alta qualidade até os controles intuitivos, reflete o compromisso da Porsche com o luxo e a funcionalidade.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Com apenas um número limitado de unidades produzidas durante seu período de produção entre 2004 e 2007, o Porsche Carrera GT se tornou um verdadeiro tesouro para colecionadores e entusiastas de carros. Sua exclusividade e prestígio garantem que ele mantenha seu valor ao longo do tempo, tornando-o não apenas um supercarro incrível para dirigir, mas também um investimento sólido para aqueles que têm a sorte de possuir um.</h1>
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
            <h1 class='data'>Em resumo, a Porsche 911 GT3 RS é a personificação da paixão da Porsche pela excelência técnica e pela emoção pura da condução esportiva. É uma máquina feita para desafiar limites e elevar os padrões do que um carro esportivo pode alcançar.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}