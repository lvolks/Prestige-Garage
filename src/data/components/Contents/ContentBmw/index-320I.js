import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBmw/320i/1.png"
import img2 from "../../../images/imagesBmw/320i/2.png"
import img3 from "../../../images/imagesBmw/320i/3.png"
import img4 from "../../../images/imagesBmw/320i/4.png"
import img5 from "../../../images/imagesBmw/320i/5.png"


export default function ContentI320() {
    return (
        <div>
        <div className="title">
            <h1>BMW 320I</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 7,1s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 184cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 240km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O BMW 320i é uma síntese magistral de desempenho dinâmico e sofisticação moderna. Como parte da família BMW Série 3, o 320i personifica a filosofia da marca de oferecer uma experiência de condução emocionante e luxuosa. Desde seu design elegante até sua engenharia meticulosa, o 320i é um verdadeiro ícone da categoria de sedãs esportivos de luxo.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O BMW 320i apresenta um design distinto e elegante que combina linhas fluidas com detalhes precisos. A grade dianteira em formato de rim, os faróis LED afilados e as linhas esculpidas conferem ao 320i uma presença marcante na estrada. Cada aspecto do design foi cuidadosamente considerado para oferecer uma estética atemporal e aerodinâmica eficiente.</h1>
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
            <h1 class='data'>Equipado com um motor TwinPower Turbo de quatro cilindros e 2.0 litros, o BMW 320i oferece um equilíbrio excepcional entre desempenho e eficiência. Com mais de 180 cavalos de potência disponíveis, o 320i é capaz de acelerar suavemente e oferecer uma experiência de condução envolvente. Sua transmissão automática de oito velocidades proporciona trocas de marchas precisas e eficientes, contribuindo para uma condução suave e responsiva.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o BMW 320i oferece um ambiente luxuoso e tecnologicamente avançado. Os materiais premium e o acabamento meticuloso criam uma atmosfera de refinamento e conforto. Recursos como o sistema de infoentretenimento iDrive, a conectividade Bluetooth e os assistentes de condução avançados garantem uma experiência de condução moderna e conveniente.</h1>
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
            <h1 class='data'>O BMW 320i é mais do que apenas um sedã; é um companheiro confiável para todas as ocasiões. Seja para viagens diárias pela cidade ou para aventuras na estrada, o 320i oferece o equilíbrio perfeito entre desempenho emocionante e praticidade cotidiana. Sua combinação de luxo, tecnologia e desempenho o torna uma escolha popular entre aqueles que procuram um carro que atenda a todas as suas necessidades de condução.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}