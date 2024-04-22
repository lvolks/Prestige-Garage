import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMercedes/amggt/1.png"
import img2 from "../../../images/imagesMercedes/amggt/2.png"
import img3 from "../../../images/imagesMercedes/amggt/3.png"
import img4 from "../../../images/imagesMercedes/amggt/4.png"
import img5 from "../../../images/imagesMercedes/amggt/5.png"

export default function ContentAmggt() {
    return (
        <div>
        <div className="title">
            <h1>MERCEDES AMG GT</h1>
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
            <h1 className='description'>CV: 422cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 295km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Mercedes-AMG GT é um supercarro que oferece uma experiência de condução emocionante e visceral. Equipado com um motor V8 biturbo de 4.0 litros, ele produz uma potência impressionante que varia de cerca de 469 a 730 cavalos, dependendo da versão. Com sua transmissão de dupla embreagem e sete velocidades, o AMG GT oferece trocas de marcha rápidas e precisas, garantindo uma aceleração poderosa e uma resposta instantânea ao toque do acelerador.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do Mercedes-AMG GT é uma combinação de elegância e agressividade, com linhas fluidas e musculosas que capturam a essência de um verdadeiro supercarro. Seu capô longo, linha de cintura baixa e traseira larga conferem ao AMG GT uma presença imponente na estrada. Detalhes como as entradas de ar proeminentes, rodas de liga leve exclusivas e escapamentos duplos enfatizam seu caráter esportivo e seu pedigree de alta performance.</h1>
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
            <h1 class='data'>Por dentro, o Mercedes-AMG GT oferece um ambiente de luxo e tecnologia de última geração. O cockpit é ergonomicamente projetado para colocar o motorista no centro da ação, com materiais de alta qualidade e acabamentos refinados por toda parte. O sistema de infotainment COMAND oferece uma variedade de recursos de entretenimento e conectividade, enquanto os sistemas de assistência ao motorista garantem uma experiência de condução segura e tranquila.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da família AMG da Mercedes-Benz, o AMG GT herda um legado de performance e paixão pela condução. Cada aspecto deste supercarro é cuidadosamente projetado e afinado pelos engenheiros da AMG para oferecer uma experiência de condução inigualável. Desde seu lançamento, o AMG GT tem sido amplamente elogiado por sua combinação de desempenho de classe mundial, estilo marcante e artesanato meticuloso.</h1>
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
            <h1 class='data'>Com sua produção limitada e seu status como um dos carros esportivos mais desejados do mundo, o Mercedes-AMG GT é mais do que apenas um veículo; é uma declaração de estilo de vida e uma expressão de poder e prestígio. Sua exclusividade e desempenho impressionante garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}