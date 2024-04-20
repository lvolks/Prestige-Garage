import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBugatti/veyron/1.png"
import img2 from "../../../images/imagesBugatti/veyron/2.png"
import img3 from "../../../images/imagesBugatti/veyron/3.png"
import img4 from "../../../images/imagesBugatti/veyron/4.png"
import img5 from "../../../images/imagesBugatti/veyron/5.png"

export default function ContentVeyron() {
    return (
        <div>
        <div className="title">
            <h1>BUGATTI VEYRON</h1>
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
            <h1 class='data'>O Bugatti Veyron é um marco na história automotiva, sendo um dos carros de produção em série mais icônicos já criados. Lançado em 2005, o Veyron foi um testemunho do compromisso da Bugatti em superar os limites da engenharia automotiva, estabelecendo novos padrões em desempenho, velocidade e luxo. Com sua combinação única de design impressionante, potência inigualável e artesanato meticuloso.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Bugatti Veyron apresenta um design inovador e elegante que o torna instantaneamente reconhecível. Cada curva e detalhe do carro foi projetado para otimizar a aerodinâmica e a estética, resultando em uma presença imponente e distinta na estrada. Desde suas entradas de ar esculpidas até suas linhas fluidas, o Veyron personifica a harmonia entre forma e função, oferecendo uma experiência visual verdadeiramente única.</h1>
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
            <h1 class='data'>Equipado com um motor W16 quad-turbo de 8.0 litros, o Bugatti Veyron oferece um desempenho extraordinário que desafia a gravidade. Com mais de 1.000 cavalos de potência e um torque impressionante, o Veyron é capaz de acelerar de 0 a 100 km/h em menos de 2,5 segundos e atingir velocidades máximas que rivalizam com as de carros de corrida. Sua transmissão de dupla embreagem e sistema de tração nas quatro rodas garantem uma condução suave e precisa, mesmo em altas velocidades.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o Bugatti Veyron oferece um ambiente de luxo e conforto supremos, onde cada detalhe foi cuidadosamente considerado. Materiais de alta qualidade, como couro macio, madeira nobre e metal polido, são habilmente trabalhados para criar uma atmosfera de opulência e exclusividade. Recursos como sistemas de entretenimento de última geração e assentos ajustáveis garantem uma experiência de condução indulgente e inesquecível.</h1>
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
            <h1 class='data'>O Bugatti Veyron deixou um legado duradouro na indústria automotiva, influenciando gerações de supercarros que se seguiram. Seu impacto vai além de simplesmente quebrar recordes de velocidade; o Veyron representou um avanço tecnológico e estilístico que continuará a ser admirado e estudado por muitos anos. Como uma das criações mais emblemáticas da Bugatti, o Veyron permanece como um símbolo de excelência, inovação e exclusividade no mundo dos automóveis de alto desempenho.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}