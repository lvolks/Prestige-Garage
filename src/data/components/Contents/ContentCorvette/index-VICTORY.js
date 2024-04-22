import "../Content/contentVariant.css";
import img1 from "../../../images/imagesCorvette/victory/1.png"
import img2 from "../../../images/imagesCorvette/victory/2.png"
import img3 from "../../../images/imagesCorvette/victory/3.png"
import img4 from "../../../images/imagesCorvette/victory/4.png"
import img5 from "../../../images/imagesCorvette/victory/5.png"

export default function ContentVictory() {
    return (
        <div>
        <div className="title">
            <h1>CORVETTE C6 VICTORY EDITION</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 3,9s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 436cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 306km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Corvette C6 Victory Edition é uma homenagem à rica tradição de desempenho e inovação da Chevrolet. Lançado em 2008, este modelo especial foi criado para comemorar a vitória da equipe Corvette Racing na categoria GT1 das 24 Horas de Le Mans em 2007. Com sua estética distinta e desempenho aprimorado, o C6 Victory Edition captura a essência do icônico esportivo americano.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Corvette C6 Victory Edition apresenta um design exclusivo que reflete sua natureza esportiva e comemorativa. Disponível em uma paleta de cores específica, incluindo branco Arctic White com detalhes em prata e azul, o carro exala uma aura de elegância e agressividade. Detalhes como as faixas de corrida, emblemas especiais e rodas exclusivas adicionam um toque de distinção ao visual do C6 Victory Edition.</h1>
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
            <h1 class='data'>Sob o capô, o Corvette C6 Victory Edition mantém o poderoso motor V8 de 6.2 litros encontrado em outros modelos da linha Corvette, mas com ajustes especiais para um desempenho aprimorado. Com mais de 400 cavalos de potência disponíveis, este esportivo americano oferece uma aceleração emocionante e uma experiência de direção dinâmica que satisfaz até mesmo os entusiastas mais exigentes.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Corvette C6 Victory Edition oferece um ambiente personalizado e confortável, onde os detalhes especiais celebram a vitória histórica da equipe Corvette Racing. Os assentos esportivos e o acabamento premium proporcionam suporte e conforto durante viagens de alta velocidade, enquanto os toques de design exclusivos, como o emblema de edição especial no painel, lembram os feitos lendários alcançados nas pistas de corrida.</h1>
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
            <h1 class='data'>O Corvette C6 Victory Edition é mais do que apenas um carro esportivo; é uma peça de história automotiva americana. Com sua produção limitada e seu status como uma homenagem à vitória da equipe Corvette Racing em Le Mans, esta edição especial tem um valor especial para colecionadores e entusiastas de carros. Seu design distinto, desempenho emocionante e exclusividade garantem que o C6 Victory Edition seja lembrado como um dos Corvettes mais especiais já produzidos pela Chevrolet.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}