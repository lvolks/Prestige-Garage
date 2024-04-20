import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMercedes/slsamg/1.png"
import img2 from "../../../images/imagesMercedes/slsamg/2.png"
import img3 from "../../../images/imagesMercedes/slsamg/3.png"
import img4 from "../../../images/imagesMercedes/slsamg/4.png"
import img5 from "../../../images/imagesMercedes/slsamg/5.png"

export default function ContentSls() {
    return (
        <div>
        <div className="title">
            <h1>MERCEDES SLS AMG</h1>
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
            <h1 class='data'>O Mercedes-Benz SLS AMG é um ícone de desempenho, equipado com um motor V8 de 6.2 litros capaz de produzir mais de 570 cavalos de potência. Esta máquina de poder é capaz de atingir uma velocidade máxima de mais de 320 km/h e acelerar de 0 a 100 km/h em menos de 4 segundos. Com sua transmissão de sete velocidades e tração traseira, o SLS AMG oferece uma experiência de condução emocionante e envolvente.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do Mercedes-Benz SLS AMG é verdadeiramente cativante, com suas linhas aerodinâmicas fluidas e portas de asa de gaivota icônicas. Cada curva e detalhe são cuidadosamente trabalhados para garantir uma estética impressionante e uma performance otimizada. Seus faróis dianteiros de LED e grade frontal imponente destacam sua presença única na estrada, enquanto a traseira larga e musculosa sugere o poder que reside sob o capô.</h1>
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
            <h1 class='data'>Por dentro, o Mercedes-Benz SLS AMG oferece um ambiente de luxo e tecnologia avançada. Os materiais de alta qualidade e os acabamentos elegantes criam uma atmosfera de refinamento, enquanto os assentos esportivos oferecem conforto e suporte durante viagens de alta performance. O sistema de infotainment com tela central oferece controle intuitivo e acesso a uma variedade de recursos, mantendo o motorista conectado e informado em todos os momentos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da família AMG da Mercedes-Benz, o SLS AMG carrega consigo um legado de desempenho e engenharia de alto nível. Cada aspecto deste supercarro é projetado para oferecer uma experiência de condução emocionante e dinâmica, refletindo a paixão e a dedicação dos engenheiros da AMG. Desde sua estreia, o SLS AMG tem sido aclamado como um dos melhores carros esportivos do mundo, conquistando corações e mentes de entusiastas de automóveis em todo o mundo.</h1>
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
            <h1 class='data'>Com sua produção limitada e seu status como um dos carros mais cobiçados do mundo, o Mercedes-Benz SLS AMG é mais do que apenas um veículo; é uma afirmação de estilo de vida e uma expressão de status e prestígio. Sua exclusividade e desempenho de classe mundial garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis, mantendo seu valor ao longo do tempo e continuando a inspirar admiração onde quer que vá. O SLS AMG é verdadeiramente uma obra-prima.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}