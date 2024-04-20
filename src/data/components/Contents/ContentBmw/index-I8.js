import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBmw/i8/1.png"
import img2 from "../../../images/imagesBmw/i8/2.png"
import img3 from "../../../images/imagesBmw/i8/3.png"
import img4 from "../../../images/imagesBmw/i8/4.png"
import img5 from "../../../images/imagesBmw/i8/5.png"

export default function ContentI8() {
    return (
        <div>
        <div className="title">
            <h1>BMW I8</h1>
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
            <h1 class='data'>O BMW i8 é um ícone da engenharia futurista, representando a visão da BMW para o futuro da mobilidade sustentável e de alto desempenho. Lançado em 2014 como parte da submarca BMW i, o i8 incorpora tecnologias inovadoras e design progressivo para oferecer uma experiência de condução única. Com sua combinação de estilo arrojado, eficiência energética e desempenho emocionante, o i8 é uma declaração audaciosa de excelência automotiva.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O BMW i8 apresenta um design revolucionário que combina elegância futurista com funcionalidade aerodinâmica avançada. Suas linhas fluidas, portas de asa de gaivota e elementos aerodinâmicos ativos não apenas impressionam visualmente, mas também otimizam o fluxo de ar para melhorar a eficiência e o desempenho. O i8 é uma obra-prima de design automotivo que redefine os padrões de beleza e funcionalidade.</h1>
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
            <h1 class='data'>Equipado com um sistema híbrido plug-in, o BMW i8 oferece uma combinação única de potência e eficiência. Seu motor elétrico fornece tração nas rodas dianteiras, enquanto um motor a gasolina de três cilindros impulsiona as rodas traseiras, oferecendo uma tração nas quatro rodas inteligente e dinâmica. Esta configuração proporciona uma potência combinada de mais de 360 cavalos, permitindo uma aceleração impressionante e uma experiência de condução emocionante.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o BMW i8 oferece um ambiente futurista e luxuoso, onde a tecnologia se funde com o conforto. Materiais sustentáveis, como couro sem cromo e plásticos reciclados, são utilizados para criar um espaço moderno e ecologicamente consciente. Recursos avançados, como o sistema de infotainment BMW iDrive e os assistentes de condução semiautônoma, garantem uma experiência de condução intuitiva e conectada.</h1>
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
            <h1 class='data'>O BMW i8 é muito mais do que apenas um carro esportivo; é um pioneiro na mobilidade sustentável e na tecnologia de propulsão alternativa. Sua combinação de desempenho eletrizante e emissões zero exemplifica o compromisso da BMW com a inovação e a responsabilidade ambiental. Como um dos primeiros supercarros híbridos plug-in do mundo, o i8 continua a inspirar entusiastas e motoristas a adotarem um estilo de vida mais sustentável e consciente.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}