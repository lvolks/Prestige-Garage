import "../Content/contentVariant.css";
import img1 from "../../../images/imagesFerrari/enzo/1.png"
import img2 from "../../../images/imagesFerrari/enzo/2.png"
import img3 from "../../../images/imagesFerrari/enzo/3.png"
import img4 from "../../../images/imagesFerrari/enzo/4.png"
import img5 from "../../../images/imagesFerrari/enzo/5.png"

export default function ContentEnzo() {
    return (
        <div>
        <div className="title">
            <h1>FERRARI ENZO</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 3,1s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 651cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 350km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>A Ferrari Enzo é um ícone indiscutível da engenharia automotiva italiana, homenageando o fundador da marca, Enzo Ferrari. Lançado em 2002, este supercarro de edição limitada representa o que há de melhor em termos de tecnologia, desempenho e estilo da Ferrari. Com sua aparência distinta e desempenho extraordinário, a Enzo personifica a paixão e o legado da marca em cada curva e detalhe.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Equipada com um motor V12 de 6.0 litros capaz de gerar mais de 650 cavalos de potência, a Ferrari Enzo oferece uma experiência de condução verdadeiramente emocionante. Com uma velocidade máxima de mais de 350 km/h e uma aceleração de 0 a 100 km/h em menos de 3,5 segundos, este supercarro é uma máquina de performance pura. Cada aspecto do design e engenharia da Enzo é projetado para proporcionar uma experiência de condução visceral e inesquecível.</h1>
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
            <h1 class='data'>O design da Ferrari Enzo não é apenas bonito, mas também altamente funcional. Cada linha e curva do carro é meticulosamente trabalhada para otimizar a aerodinâmica e proporcionar downforce máximo em altas velocidades. O resultado é uma aparência agressiva e imponente que não apenas impressiona visualmente, mas também melhora o desempenho do carro em circuitos de corrida e estradas sinuosas.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior da Ferrari Enzo, o foco está no piloto e na experiência de condução. Os bancos esportivos oferecem suporte lateral excepcional, mantendo o motorista firmemente plantado mesmo nas curvas mais agressivas. Os controles são ergonomicamente posicionados para fácil acesso, permitindo que o motorista se concentre totalmente na estrada à frente. Cada detalhe do interior é trabalhado com materiais de alta qualidade e acabamento artesanal, refletindo o compromisso da Ferrari com o luxo e a excelência.</h1>
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
            <h1 class='data'>A Ferrari Enzo deixou um legado imortal na história dos supercarros, sendo lembrada como uma das criações mais emblemáticas da marca italiana. Sua produção limitada e seu desempenho extraordinário garantem que ela permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo. Com seu status de ícone automotivo, a Enzo continua a inspirar admiração e respeito, representando o auge da excelência italiana na indústria automobilística.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}