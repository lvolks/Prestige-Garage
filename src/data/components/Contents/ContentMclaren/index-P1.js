import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMclaren/p1/1.png"
import img2 from "../../../images/imagesMclaren/p1/2.png"
import img3 from "../../../images/imagesMclaren/p1/3.png"
import img4 from "../../../images/imagesMclaren/p1/4.png"
import img5 from "../../../images/imagesMclaren/p1/5.png"

export default function ContentP1() {
    return (
        <div>
        <div className="title">
            <h1>MCLAREN P1</h1>
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
            <h1 class='data'>A McLaren P1 é um marco na história dos supercarros, representando o ápice da engenharia automotiva e da tecnologia de ponta. Equipada com um sistema híbrido de propulsão que combina um motor V8 biturbo de 3.8 litros com um motor elétrico, a P1 produz uma potência combinada de mais de 900 cavalos. Essa impressionante potência é entregue de forma instantânea, proporcionando uma aceleração vertiginosa e uma experiência de condução verdadeiramente emocionante.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design da McLaren P1 é uma sinfonia de formas aerodinâmicas e linhas futuristas. Cada curva e detalhe são meticulosamente trabalhados para otimizar o fluxo de ar e maximizar a eficiência aerodinâmica. O uso extensivo de fibra de carbono não apenas reduz o peso, mas também confere à P1 uma presença imponente na estrada. As portas de abertura para cima e o aerofólio ajustável destacam sua natureza de hipercarro de alto desempenho.</h1>
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
            <h1 class='data'>Por dentro, a McLaren P1 oferece um ambiente de luxo e tecnologia avançada. O cockpit é projetado para colocar o motorista no centro da ação, com uma disposição minimalista e controles intuitivos. Os materiais de alta qualidade e os acabamentos refinados criam uma atmosfera de elegância e sofisticação. O sistema de infotainment oferece acesso a uma variedade de recursos de entretenimento e conectividade, garantindo uma experiência de condução moderna e envolvente.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como herdeira do legado da McLaren nas corridas de automóveis, a P1 é projetada para oferecer um desempenho excepcional tanto na estrada quanto na pista. Cada aspecto deste hipercarro é afinado para proporcionar uma experiência de condução dinâmica e envolvente. Desde sua estreia, a McLaren P1 tem sido reconhecida por sua impressionante capacidade de aceleração, manejo ágil e frenagem potente, solidificando seu lugar como um dos supercarros mais emblemáticos já produzidos.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos hipercarros mais exclusivos do mundo, a McLaren P1 é mais do que apenas um veículo; é uma obra de arte sobre rodas e um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ela permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}