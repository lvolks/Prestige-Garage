import "../Content/contentVariant.css";
import img1 from "../../../images/imagesCorvette/z06/1.png"
import img2 from "../../../images/imagesCorvette/z06/2.png"
import img3 from "../../../images/imagesCorvette/z06/3.png"
import img4 from "../../../images/imagesCorvette/z06/4.png"
import img5 from "../../../images/imagesCorvette/z06/5.png"

export default function ContentZ06() {
    return (
        <div>
        <div className="title">
            <h1>CORVETTE Z06</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,6s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 659cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 315km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Corvette Z06 é a personificação máxima da performance e potência na linhagem Corvette. Lançado pela primeira vez em 1963 como um pacote opcional de alto desempenho, o Z06 evoluiu ao longo das décadas para se tornar um dos modelos mais icônicos da marca. Com uma combinação de design agressivo, engenharia de alto nível e desempenho impressionante, o Z06 é uma máquina que desafia os limites da velocidade e da adrenalina.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Corvette Z06 apresenta um design agressivo e distintivo que o diferencia dos outros modelos da linha. Com sua postura baixa, rodas maiores e detalhes aerodinâmicos exclusivos, o Z06 exala uma aura de poder e performance. Detalhes como entradas de ar ampliadas, saias laterais pronunciadas e um spoiler traseiro grande não apenas aumentam a estética do carro, mas também melhoram a estabilidade em altas velocidades.</h1>
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
            <h1 class='data'>Equipado com um motor V8 de alto desempenho e uma série de melhorias mecânicas, o Corvette Z06 oferece um desempenho impecável em todas as situações de condução. Com mais de 650 cavalos de potência disponíveis, o Z06 é capaz de acelerar de 0 a 100 km/h em menos de 3 segundos e atingir velocidades de topo que desafiam a gravidade. Sua transmissão manual de sete velocidades ou automática de oito velocidades garante uma condução emocionante e precisa.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Corvette Z06 oferece um ambiente esportivo e centrado no piloto, com materiais de alta qualidade e tecnologia de ponta. Os assentos esportivos oferecem suporte lateral excepcional durante a condução agressiva, enquanto o volante multifuncional coloca os controles importantes ao alcance dos dedos do motorista. Recursos como o sistema de infoentretenimento e os modos de condução ajustáveis garantem uma experiência de condução personalizada e envolvente.</h1>
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
            <h1 class='data'>O Corvette Z06 continua a ser um ícone do desempenho americano, mantendo uma base de fãs dedicada e uma reputação estelar na comunidade de entusiastas de automóveis. Com sua combinação única de design arrojado, desempenho eletrizante e valor excepcional, o Z06 permanece como um dos modelos mais emocionantes e acessíveis da linha Corvette. Sua presença nas ruas e nas pistas é um testemunho do compromisso da Chevrolet com a excelência e a inovação no mundo automotivo.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}