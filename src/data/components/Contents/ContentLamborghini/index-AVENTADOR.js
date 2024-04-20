import "../Content/contentVariant.css";
import img1 from "../../../images/imagesLamborghini/aventador/1.png"
import img2 from "../../../images/imagesLamborghini/aventador/2.png"
import img3 from "../../../images/imagesLamborghini/aventador/3.png"
import img4 from "../../../images/imagesLamborghini/aventador/4.png"
import img5 from "../../../images/imagesLamborghini/aventador/5.png"

export default function ContentAventador() {
    return (
        <div>
        <div className="title">
            <h1>LAMBORGHINI AVENTADOR</h1>
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
            <h1 class='data'>A Lamborghini Aventador é um supercarro que personifica o espírito audacioso e o desempenho exuberante da marca italiana. Equipada com um motor V12 aspirado de 6.5 litros, a Aventador produz uma potência impressionante de mais de 700 cavalos, proporcionando uma experiência de condução visceral e emocionante. Com sua velocidade máxima de mais de 350 km/h e uma aceleração de 0 a 100 km/h em menos de 3 segundos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design da Lamborghini Aventador é uma obra de arte em movimento, com linhas agressivas e uma postura imponente que a tornam instantaneamente reconhecível. Seu corpo esculpido é uma fusão de estilo e função, com entradas de ar amplas e uma asa traseira proeminente que não apenas aprimoram a aerodinâmica, mas também aumentam a estabilidade em altas velocidades. Com suas portas de tesoura icônicas e faróis em forma de Y, a Aventador é uma declaração de estilo e desempenho.</h1>
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
            <h1 class='data'>Por dentro, a Lamborghini Aventador oferece um ambiente de luxo e tecnologia de ponta. O cockpit é uma combinação de artesanato italiano e inovação moderna, com materiais de alta qualidade e acabamentos personalizados. Os assentos esportivos abraçam o motorista e o passageiro, proporcionando conforto durante viagens de alta velocidade, enquanto o sistema de infotainment mantém todos os ocupantes conectados e entretidos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da linhagem de supercarros da Lamborghini, a Aventador carrega consigo um legado de desempenho e paixão pela condução. Cada aspecto deste carro é projetado para oferecer uma experiência de condução emocionante e envolvente, desde sua potência bruta até sua manobrabilidade ágil. Desde seu lançamento, a Aventador tem sido elogiada por sua combinação de desempenho de classe mundial, estilo marcante e artesanato meticuloso.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais cobiçados do mundo, a Lamborghini Aventador é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ela permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}