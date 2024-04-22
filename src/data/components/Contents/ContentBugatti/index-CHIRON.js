import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBugatti/chiron/1.png"
import img2 from "../../../images/imagesBugatti/chiron/2.png"
import img3 from "../../../images/imagesBugatti/chiron/3.png"
import img4 from "../../../images/imagesBugatti/chiron/4.png"
import img5 from "../../../images/imagesBugatti/chiron/5.png"

export default function ContentChiron() {
    return (
        <div>
        <div className="title">
            <h1>BUGATTI CHIRON</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,3s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 1.575cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 380km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Bugatti Chiron é o epítome da engenharia de luxo e performance na indústria automotiva. Sucessor do icônico Veyron, o Chiron foi lançado em 2016 como uma afirmação de excelência técnica e elegância refinada. Combinando uma potência impressionante com um design sofisticado, o Chiron personifica o compromisso da Bugatti com a criação de supercarros incomparáveis.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Bugatti Chiron apresenta um design imponente e aerodinâmica avançada que o torna instantaneamente reconhecível em qualquer estrada. Cada linha e curva do carro foi meticulosamente projetada para otimizar a eficiência aerodinâmica e maximizar o desempenho em altas velocidades. Detalhes como as entradas de ar laterais, o difusor traseiro e o spoiler ativo contribuem para a estabilidade e controle excepcionais do Chiron em todas as condições de condução.</h1>
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
            <h1 class='data'>Equipado com um motor W16 quad-turbo de 8.0 litros, o Bugatti Chiron oferece uma potência inigualável que redefine os limites do desempenho automotivo. Com mais de 1.500 cavalos de potência e um torque monstruoso, o Chiron é capaz de acelerar de 0 a 100 km/h em menos de 2,5 segundos e atingir uma velocidade máxima limitada eletronicamente de 420 km/h. Essa combinação de potência bruta e tecnologia de ponta coloca o Chiron em um patamar superior entre os supercarros mais exclusivos do mundo.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Bugatti Chiron oferece um ambiente de luxo e conforto incomparáveis, onde cada detalhe foi cuidadosamente projetado para atender às necessidades dos motoristas mais exigentes. Materiais de alta qualidade, como couro macio, fibra de carbono e metal escovado, são habilmente trabalhados para criar uma atmosfera de sofisticação e exclusividade. Recursos de última geração, como sistemas de entretenimento avançados e controles intuitivos, garantem uma experiência de condução indulgente e inesquecível.</h1>
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
            <h1 class='data'>O Bugatti Chiron é mais do que apenas um carro; é um símbolo de excelência automotiva e um testemunho do compromisso da Bugatti com a inovação e o prestígio. Com sua combinação de desempenho fenomenal, design deslumbrante e artesanato meticuloso, o Chiron continua a inspirar admiração e reverência em todo o mundo. Como o pináculo da engenharia automotiva, o Chiron permanece como um dos supercarros mais desejados e admirados já produzidos pela humanidade.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}