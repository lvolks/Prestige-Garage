import "../Content/contentVariant.css";
import img1 from "../../../images/imagesLamborghini/sian/1.png"
import img2 from "../../../images/imagesLamborghini/sian/2.png"
import img3 from "../../../images/imagesLamborghini/sian/3.png"
import img4 from "../../../images/imagesLamborghini/sian/4.png"
import img5 from "../../../images/imagesLamborghini/sian/5.png"

export default function ContentSian() {
    return (
        <div>
        <div className="title">
            <h1>LAMBORGHINI SIAN</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,8s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 819cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 350km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>A Lamborghini Sian é uma obra-prima de engenharia que encapsula a essência da marca italiana, combinando tradição e inovação em um pacote deslumbrante. Equipada com um motor V12 aspirado de 6.5 litros combinado a um sistema híbrido leve, a Sian produz uma potência impressionante de mais de 800 cavalos. Essa fusão de tecnologia de ponta com a paixão pela condução oferece uma experiência de direção incomparável, onde o passado se encontra com o futuro.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design da Lamborghini Sian é uma obra de arte em movimento, com linhas agressivas e detalhes aerodinâmicos que capturam a imaginação. Inspirada no lendário Countach, esta máquina esportiva é uma interpretação moderna de um ícone do passado. Os detalhes exclusivos, como as entradas de ar dianteiras esculpidas e o difusor traseiro proeminente, não apenas aprimoram a estética, mas também melhoram o desempenho dinâmico, proporcionando estabilidade em altas velocidades.</h1>
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
            <h1 class='data'>Por dentro, a Lamborghini Sian oferece um ambiente de luxo e tecnologia de ponta. O cockpit é uma mistura de artesanato meticuloso e inovação moderna, com materiais de alta qualidade e acabamentos personalizados que refletem a exclusividade deste supercarro. Os assentos esportivos proporcionam conforto e suporte durante viagens de alta velocidade, enquanto o sistema de infotainment mantém o motorista conectado e informado em todos os momentos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte de uma série altamente limitada, a Lamborghini Sian é mais do que apenas um carro; é uma declaração de status e prestígio. Sua produção estritamente limitada garante sua exclusividade, tornando-a um objeto de desejo para colecionadores e entusiastas de supercarros em todo o mundo. Com seu design revolucionário, desempenho impressionante e pedigree da Lamborghini, a Sian é uma obra-prima automotiva que continua a inspirar admiração e inveja.</h1>
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
            <h1 class='data' >A Lamborghini Sian não é apenas um supercarro, mas sim um vislumbre do futuro da marca italiana. Sua tecnologia híbrida leve e design inovador representam uma evolução na engenharia automotiva, indicando o caminho para uma nova geração de supercarros mais sustentáveis e emocionantes. Como um símbolo da incessante busca pela excelência e pela paixão pela velocidade, a Sian permanecerá como uma das mais emblemáticas Lamborghinis já produzidas.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}