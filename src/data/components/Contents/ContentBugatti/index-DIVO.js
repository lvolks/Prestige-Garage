import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBugatti/divo/1.png"
import img2 from "../../../images/imagesBugatti/divo/2.png"
import img3 from "../../../images/imagesBugatti/divo/3.png"
import img4 from "../../../images/imagesBugatti/divo/4.png"
import img5 from "../../../images/imagesBugatti/divo/5.png"

export default function ContentDivo() {
    return (
        <div>
        <div className="title">
            <h1>BUGATTI DIVO</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,4s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 1500cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 380km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Bugatti Divo é a expressão suprema da performance e exclusividade na indústria automotiva de alto luxo. Revelado em 2018 como uma edição limitada de apenas 40 unidades, o Divo representa o ápice da engenharia e design da Bugatti. Com sua combinação única de desempenho incomparável, artesanato meticuloso e exclusividade absoluta, o Divo é um tesouro automotivo cobiçado por colecionadores e entusiastas de todo o mundo.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Bugatti Divo apresenta um design distinto e aerodinâmica extrema que o diferencia de qualquer outro carro na estrada. Cada linha e curva do carro foi meticulosamente projetada para otimizar o fluxo de ar e maximizar a downforce em altas velocidades. Detalhes como o divisor dianteiro proeminente, o grande difusor traseiro e o spoiler ajustável destacam o compromisso da Bugatti com o desempenho aerodinâmico de classe mundial.</h1>
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
            <h1 class='data'>Equipado com o mesmo motor W16 quad-turbo de 8.0 litros encontrado no Chiron, o Bugatti Divo oferece um desempenho impecável e uma potência inigualável. Com mais de 1.500 cavalos de potência e um torque monstruoso, o Divo é capaz de acelerar de 0 a 100 km/h em menos de 2,5 segundos e atingir velocidades de topo que desafiam a gravidade. Sua transmissão de dupla embreagem de sete velocidades e seu sistema de tração nas quatro rodas garantem uma entrega de potência suave e uma experiência de condução emocionante em todas as condições.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Bugatti Divo oferece um ambiente de luxo e personalização sob medida, onde cada detalhe é adaptado às preferências individuais do cliente. Materiais exóticos, como couro de alta qualidade, fibra de carbono e metal usinado, são habilmente trabalhados para criar uma atmosfera de elegância e sofisticação. Recursos de última geração, como sistemas de infoentretenimento avançados e controles intuitivos, garantem uma experiência de condução indulgente e inigualável.</h1>
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
            <h1 class='data'>O Bugatti Divo é mais do que apenas um carro; é uma obra de arte sobre rodas que transcende o conceito de automóvel. Cada aspecto do Divo, desde seu design aerodinâmico até seu desempenho eletrizante, é uma manifestação da paixão, habilidade e dedicação dos artesãos e engenheiros da Bugatti. Como uma das criações mais exclusivas e desejadas da marca, o Divo continua a inspirar admiração e reverência em todos os que têm o privilégio de testemunhar sua presença majestosa.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}