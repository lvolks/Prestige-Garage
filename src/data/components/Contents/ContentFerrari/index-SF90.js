import "../Content/contentVariant.css";
import img1 from "../../../images/imagesFerrari/sf90/1.png"
import img2 from "../../../images/imagesFerrari/sf90/2.png"
import img3 from "../../../images/imagesFerrari/sf90/3.png"
import img4 from "../../../images/imagesFerrari/sf90/4.png"
import img5 from "../../../images/imagesFerrari/sf90/5.png"

export default function ContentSf90() {
    return (
        <div>
        <div className="title">
            <h1>FERRARI SF90</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,5s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 986cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 340km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>A Ferrari SF90 Stradale representa o auge da engenharia automotiva italiana, combinando tecnologia de ponta com desempenho extraordinário. Lançada em 2019, a SF90 é o primeiro híbrido plug-in da Ferrari, incorporando décadas de expertise da marca em corridas e inovação tecnológica. Com um motor V8 twin-turbo combinado com três motores elétricos, a SF90 oferece uma potência impressionante e uma experiência de condução incomparável.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Equipada com um motor V8 twin-turbo de 4.0 litros e três motores elétricos, a Ferrari SF90 Stradale produz uma potência combinada de mais de 1.000 cavalos. Essa impressionante quantidade de potência permite que o carro acelere de 0 a 100 km/h em menos de 2,5 segundos e atinja uma velocidade máxima de mais de 340 km/h. Além disso, o sistema de tração nas quatro rodas garante uma tração excepcional em todas as condições de direção.</h1>
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
            <h1 class='data'>O design da Ferrari SF90 Stradale é uma fusão de forma e função, combinando elementos futuristas com uma estética agressiva e aerodinâmica. Cada detalhe do carro foi cuidadosamente projetado para otimizar o fluxo de ar e melhorar o desempenho em alta velocidade. Desde sua grade dianteira distinta até suas saídas de ar laterais e spoiler traseiro ativo, a SF90 é uma obra de arte em movimento.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior da Ferrari SF90 Stradale, os ocupantes são recebidos por um ambiente luxuoso e tecnologicamente avançado. Os materiais de alta qualidade e o acabamento artesanal criam uma sensação de requinte e exclusividade, enquanto os sistemas de infotainment e assistência ao motorista mantêm os ocupantes conectados e seguros. Os assentos esportivos oferecem conforto e suporte durante viagens de alta velocidade, garantindo uma experiência de condução premium em todos os momentos.</h1>
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
            <h1 class='data'>A Ferrari SF90 Stradale marca o início de um novo capítulo na história da lendária fabricante italiana. Sua combinação de desempenho excepcional, tecnologia inovadora e design deslumbrante a coloca no topo da lista dos supercarros mais desejados do mundo. Com sua produção limitada e seu status como o primeiro híbrido plug-in da Ferrari, a SF90 está destinada a se tornar um ícone da marca e um marco na evolução dos supercarros modernos.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}