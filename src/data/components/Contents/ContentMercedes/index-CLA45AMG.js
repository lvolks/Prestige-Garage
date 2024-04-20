import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMercedes/cla45amg/1.png"
import img2 from "../../../images/imagesMercedes/cla45amg/2.png"
import img3 from "../../../images/imagesMercedes/cla45amg/3.png"
import img4 from "../../../images/imagesMercedes/cla45amg/4.png"
import img5 from "../../../images/imagesMercedes/cla45amg/5.png"

export default function ContentCla() {
    return (
        <div>
        <div className="title">
            <h1>MERCEDES CLA 45 AMG</h1>
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
            <h1 class='data'>O Mercedes-AMG CLA 45 é um sedan compacto que oferece um desempenho excepcional em um pacote elegante e refinado. Equipado com um motor turbocharged de 2.0 litros, este carro entrega uma potência impressionante de mais de 380 cavalos. Com sua transmissão de dupla embreagem de oito velocidades e tração nas quatro rodas, o CLA 45 oferece uma aceleração rápida e uma experiência de condução emocionante, seja na cidade ou na estrada aberta.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do Mercedes-AMG CLA 45 combina elegância com agressividade, com linhas aerodinâmicas e detalhes esportivos que destacam seu caráter de alto desempenho. A grade dianteira com lâminas verticais cromadas, as entradas de ar proeminentes e as saias laterais pronunciadas conferem ao CLA 45 uma presença imponente na estrada. As rodas de liga leve exclusivas e o sistema de escapamento duplo enfatizam ainda mais seu pedigree esportivo.</h1>
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
            <h1 class='data'>Por dentro, o Mercedes-AMG CLA 45 oferece um ambiente de luxo e tecnologia avançada. Os materiais de alta qualidade e os acabamentos refinados criam uma atmosfera elegante e acolhedora, enquanto os assentos esportivos oferecem suporte confortável durante viagens de alta performance. O sistema de infoentretenimento MBUX mantém o motorista conectado e informado, enquanto os sistemas de assistência ao motorista garantem uma experiência de condução segura e tranquila.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da família AMG da Mercedes-Benz, o CLA 45 herda um legado de performance e paixão pela condução. Cada aspecto deste sedan é projetado e afinado pelos engenheiros da AMG para oferecer uma experiência de condução emocionante e envolvente. Desde seu lançamento, o CLA 45 tem sido elogiado por sua combinação de desempenho de classe mundial, estilo dinâmico e artesanato meticuloso.</h1>
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
            <h1 class='data'>Com sua combinação de desempenho esportivo e praticidade diária, o Mercedes-AMG CLA 45 é uma escolha ideal para entusiastas que buscam um sedan compacto com emoção adicional. Sua acessibilidade em comparação com outros modelos AMG o torna uma opção atraente para aqueles que desejam experimentar a emoção de dirigir um carro esportivo de alto desempenho. O CLA 45 é uma declaração de estilo e uma expressão de paixão pela condução, destinado a inspirar admiração em cada curva da estrada.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}