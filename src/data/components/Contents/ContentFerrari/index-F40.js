import "../Content/contentVariant.css";
import img1 from "../../../images/imagesFerrari/f40/1.png"
import img2 from "../../../images/imagesFerrari/f40/2.png"
import img3 from "../../../images/imagesFerrari/f40/3.png"
import img4 from "../../../images/imagesFerrari/f40/4.png"
import img5 from "../../../images/imagesFerrari/f40/5.png"

export default function ContentF40() {
    return (
        <div>
        <div className="title">
            <h1>FERRARI F40</h1>
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
            <h1 class='data'>A Ferrari F40 é uma lenda viva no mundo dos supercarros, representando o pináculo da engenharia automotiva italiana da década de 1980. Lançada em 1987 para celebrar o 40º aniversário da Ferrari, a F40 foi concebida como o carro de rua mais rápido e potente da época. Com seu design distinto, desempenho arrebatador e aura de exclusividade, a F40 se tornou um ícone da velocidade e do prestígio automotivo.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Equipada com um motor V8 twin-turbo de 2.9 litros, a Ferrari F40 entrega uma potência impressionante de mais de 470 cavalos. Com um peso leve e aerodinâmica avançada, o carro é capaz de acelerar de 0 a 100 km/h em menos de 4 segundos e atingir uma velocidade máxima de cerca de 320 km/h, uma conquista notável para a época. Cada aspecto do projeto da F40 foi otimizado para proporcionar uma experiência de condução emocionante e inesquecível.</h1>
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
            <h1 class='data'>O design da Ferrari F40 é uma expressão de pura agressividade e funcionalidade. Com sua carroceria aerodinâmica em fibra de carbono e seu interior espartano, a F40 transmite uma aura de desempenho e precisão. Detalhes como as entradas de ar laterais, os faróis retráteis e o grande spoiler traseiro não apenas contribuem para a estética ousada do carro, mas também melhoram sua estabilidade em altas velocidades.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Inspirada pela lendária herança da Ferrari nas pistas de corrida, a F40 foi projetada para oferecer um desempenho comparável ao dos carros de corrida da época. Seu chassi rígido, suspensão ajustável e sistema de freios de alto desempenho garantem uma condução ágil e responsiva, permitindo que os motoristas explorem os limites do carro com confiança e controle.</h1>
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
            <h1 class='data'>Ao longo das décadas, a Ferrari F40 manteve seu status como um dos supercarros mais cobiçados e respeitados já produzidos. Sua produção limitada e sua reputação lendária garantem que ela continue a ser um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo. Com sua combinação de beleza, desempenho e exclusividade, a F40 permanece como um testemunho do compromisso da Ferrari com a excelência automotiva e um símbolo eterno da paixão pela velocidade.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}