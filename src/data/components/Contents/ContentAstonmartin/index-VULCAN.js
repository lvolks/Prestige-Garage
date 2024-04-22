import "../Content/contentVariant.css";
import img1 from "../../../images/imagesAstonmartin/vulcan/1.png"
import img2 from "../../../images/imagesAstonmartin/vulcan/2.png"
import img3 from "../../../images/imagesAstonmartin/vulcan/3.png"
import img4 from "../../../images/imagesAstonmartin/vulcan/4.png"
import img5 from "../../../images/imagesAstonmartin/vulcan/5.png"

export default function ContentVulcan() {
    return (
        <div>
        <div className="title">
            <h1>ASNTON MARTIN VULCAN</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,9s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 800cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 325km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Aston Martin Vulcan representa a máxima expressão da engenharia automotiva da marca britânica, unindo potência incomparável, design arrojado e tecnologia de ponta. Como um carro de pista extremamente exclusivo, o Vulcan foi desenvolvido para oferecer um desempenho excepcional e uma experiência de condução emocionante para os entusiastas mais exigentes. Com uma produção limitada e um design impressionante.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Aston Martin Vulcan apresenta um design exótico e uma aerodinâmica extrema, projetados para proporcionar um desempenho incomparável na pista. Com linhas agressivas, formas esculpidas e detalhes aerodinâmicos proeminentes, o Vulcan emana uma presença imponente e dominante. Elementos como a asa traseira ajustável, as entradas de ar laterais amplas e o difusor traseiro maciço garantem uma aderência excepcional e estabilidade em alta velocidade.</h1>
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
            <h1 class='data'>Equipado com um motor V12 de aspiração natural de mais de 800 cavalos de potência, o Aston Martin Vulcan oferece uma potência alucinante que desafia os limites da velocidade e da emoção. Com uma transmissão sequencial de seis velocidades e tração traseira, o Vulcan é capaz de atingir velocidades incríveis e tempos de volta impressionantes. Sua construção leve e sua suspensão ajustável garantem uma dirigibilidade ágil e responsiva em todas as situações de corrida.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Aston Martin Vulcan oferece um ambiente de corrida sob medida, onde cada detalhe foi projetado para maximizar o desempenho e o conforto do piloto. Com assentos de competição personalizados, volante de corrida multifuncional e um painel de instrumentos simplificado, o Vulcan oferece ao piloto uma conexão direta com a máquina. Materiais de alta qualidade e acabamentos de luxo garantem uma experiência de condução exclusiva e indulgente.</h1>
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
            <h1 class='data'>O Aston Martin Vulcan é mais do que apenas um carro de corrida; é uma obra de arte sobre rodas que encapsula a essência da paixão automotiva. Sua combinação de desempenho emocionante, design impressionante e exclusividade absoluta o torna uma das máquinas mais cobiçadas e admiradas já criadas. Como um testemunho do compromisso da Aston Martin com a excelência e a inovação, o Vulcan continua a ser um símbolo de prestígio e poder nas pistas de corrida ao redor do mundo.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}