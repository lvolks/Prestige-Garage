import "../Content/contentVariant.css";
import img1 from "../../../images/imagesKoenigsegg/ccxr/1.png"
import img2 from "../../../images/imagesKoenigsegg/ccxr/2.png"
import img3 from "../../../images/imagesKoenigsegg/ccxr/3.png"
import img4 from "../../../images/imagesKoenigsegg/ccxr/4.png"
import img5 from "../../../images/imagesKoenigsegg/ccxr/5.png"

export default function ContentCcxr() {
    return (
        <div>
        <div className="title">
            <h1>KOENIGSEGG CCXR TREVITA</h1>
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
            <h1 class='data'>O Koenigsegg CCXR é um supercarro que impressiona com sua potência e desempenho. Equipado com um motor V8 twin-supercharged de 4.8 litros, o CCXR é capaz de produzir uma potência surpreendente de mais de 1.000 cavalos quando abastecido com biocombustível E85. Essa potência é transmitida às rodas por meio de uma transmissão de dupla embreagem, permitindo uma aceleração explosiva e uma velocidade máxima extraordinária.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Koenigsegg CCXR apresenta um design que combina elegância com agressividade. Com suas linhas fluidas e curvas aerodinâmicas, o CCXR é um verdadeiro espetáculo visual. Detalhes como as portas de abertura para cima e o sistema de escapamento central destacam sua natureza de supercarro de alto desempenho, enquanto as entradas de ar e os difusores dianteiro e traseiro garantem estabilidade em altas velocidades.</h1>
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
            <h1 class='data'>Por dentro, o Koenigsegg CCXR oferece um ambiente luxuoso e repleto de tecnologia. O cockpit é projetado para colocar o motorista no controle total, com controles intuitivos e uma ergonomia excepcional. Os materiais de alta qualidade, como couro e fibra de carbono, conferem uma sensação de luxo e esportividade, enquanto o sistema de entretenimento mantém os ocupantes conectados e entretidos durante a viagem.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Koenigsegg CCXR é o resultado da engenharia de precisão e inovação tecnológica. Cada componente do carro é projetado para maximizar o desempenho e a eficiência, desde sua estrutura leve até seu sistema de suspensão ajustável. A combinação de materiais avançados e técnicas de fabricação de última geração resulta em um supercarro que oferece uma experiência de condução verdadeiramente excepcional.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais exclusivos do mundo, o Koenigsegg CCXR é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações. O CCXR é uma verdadeira obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}