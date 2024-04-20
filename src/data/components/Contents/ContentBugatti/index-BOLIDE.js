import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBugatti/bolide/1.png"
import img2 from "../../../images/imagesBugatti/bolide/2.png"
import img3 from "../../../images/imagesBugatti/bolide/3.png"
import img4 from "../../../images/imagesBugatti/bolide/4.png"
import img5 from "../../../images/imagesBugatti/bolide/5.png"

export default function ContentBolide() {
    return (
        <div>
        <div className="title">
            <h1>BUGATTI BOLIDE</h1>
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
            <h1 class='data'>O Bugatti Bolide personifica a busca implacável pela velocidade extrema e desempenho inigualável. Revelado em 2020 como um estudo de design radical e tecnológico, o Bolide é uma declaração ousada da Bugatti para redefinir os limites do que é possível em um supercarro. Com sua aparência agressiva e desempenho impressionante, o Bolide está pronto para desafiar as leis da física e levar a experiência de condução a novos patamares.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Bugatti Bolide apresenta um design revolucionário que combina aerodinâmica extrema com uma estética futurista e agressiva. Cada linha e curva do carro foi meticulosamente projetada para cortar o ar com eficiência e maximizar o downforce em altas velocidades. Detalhes como as entradas de ar ampliadas, o spoiler traseiro proeminente e o difusor dianteiro destacam o compromisso da Bugatti com a excelência aerodinâmica.</h1>
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
            <h1 class='data'>Equipado com o lendário motor W16 da Bugatti, o Bolide entrega uma potência impressionante que desafia a imaginação. Com uma potência estimada em mais de 1.800 cavalos de potência, o Bolide é capaz de alcançar velocidades de topo que rivalizam com os carros de corrida mais rápidos do mundo. Cada componente do motor foi otimizado para reduzir o peso e maximizar a eficiência, garantindo um desempenho sem precedentes em todas as condições.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Projetado com um foco implacável na performance em pista, o Bugatti Bolide oferece um manuseio preciso e ágil que desafia as expectativas. Com sua suspensão ajustável e sistemas de controle dinâmico avançados, o Bolide é capaz de enfrentar as curvas mais desafiadoras com confiança e precisão. Cada aspecto do carro foi projetado para proporcionar uma experiência de condução emocionante e envolvente que desafia os limites do possível.</h1>
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
            <h1 class='data'>O Bugatti Bolide não é apenas um supercarro, mas sim um exercício de engenharia e tecnologia de ponta. Desde sua estrutura monocoque de fibra de carbono até seu sistema de resfriamento de alta eficiência, cada aspecto do Bolide é uma demonstração do compromisso da Bugatti com a inovação e excelência. Com seu design visionário e desempenho inigualável, o Bolide continua a empurrar os limites do que é possível em um carro de alto desempenho e a manter a Bugatti na vanguarda da indústria automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}