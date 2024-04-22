import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBmw/z4/1.png"
import img2 from "../../../images/imagesBmw/z4/2.png"
import img3 from "../../../images/imagesBmw/z4/3.png"
import img4 from "../../../images/imagesBmw/z4/4.png"
import img5 from "../../../images/imagesBmw/z4/5.png"

export default function ContentZ4() {
    return (
        <div>
        <div className="title">
            <h1>BMW Z4</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 6,8s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 382cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 241km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O BMW Z4 é um roadster de alto desempenho que personifica a emoção e a liberdade de dirigir ao ar livre. Desde o seu lançamento, o Z4 tem sido reconhecido por sua combinação única de estilo esportivo, dinâmica de condução emocionante e tecnologia de ponta. Como um verdadeiro roadster de dois lugares, o Z4 oferece uma experiência de condução envolvente e emocionante que é difícil de igualar.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O BMW Z4 apresenta um design dinâmico e elegante que atrai olhares por onde passa. Com suas linhas fluidas, proporções equilibradas e detalhes distintivos, o Z4 transmite uma sensação de movimento e agilidade mesmo quando está parado. Detalhes como a grade dianteira em forma de rim, os faróis LED e as saídas de ar laterais reforçam a estética esportiva do Z4, enquanto o teto rígido retrátil adiciona versatilidade e praticidade ao design.</h1>
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
            <h1 class='data'>Equipado com uma variedade de opções de motores, incluindo versões de quatro e seis cilindros, o BMW Z4 oferece desempenho eletrizante em todas as configurações. Com potências que variam de aproximadamente 200 a mais de 380 cavalos de potência, o Z4 é capaz de proporcionar acelerações emocionantes e uma dirigibilidade ágil. Sua suspensão esportiva e direção precisa garantem uma resposta rápida e uma experiência de condução envolvente em estradas sinuosas e retas.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o BMW Z4 oferece um ambiente luxuoso e tecnologicamente avançado, onde cada detalhe foi cuidadosamente elaborado para proporcionar conforto e conveniência. Materiais de alta qualidade, como couro premium e acabamentos em alumínio, criam uma atmosfera de sofisticação e requinte. Recursos como o sistema de infoentretenimento iDrive, o painel de instrumentos digital e os assistentes de condução avançados garantem uma experiência de condução conectada e indulgente.</h1>
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
            <h1 class='data'>O BMW Z4 é mais do que apenas um carro; é um símbolo de liberdade automotiva e prazer de dirigir. Seja você explorando estradas de montanha sinuosas ou navegando pelas ruas da cidade em um dia ensolarado, o Z4 oferece uma experiência de condução emocionante e gratificante. Sua combinação de design emocionante, desempenho eletrizante e luxo refinado continua a cativar entusiastas de carros esportivos em todo o mundo.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}