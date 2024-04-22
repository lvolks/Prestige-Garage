import "../Content/contentVariant.css";
import img1 from "../../../images/imagesNissan/r32/1.png"
import img2 from "../../../images/imagesNissan/r32/2.png"
import img3 from "../../../images/imagesNissan/r32/3.png"
import img4 from "../../../images/imagesNissan/r32/4.png"
import img5 from "../../../images/imagesNissan/r32/5.png"

export default function ContentR32() {
    return (
        <div>
        <div className="title">
            <h1>SKYLINE R32</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 5,7s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 212cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 230km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Nissan Skyline R32 é um dos carros mais emblemáticos da era dourada dos automóveis japoneses dos anos 90. Lançado em 1989, o R32 foi um marco na história da Nissan, combinando desempenho esportivo com tecnologia avançada. Equipado com o lendário motor RB26DETT twin-turbo de 2.6 litros, o R32 oferece uma combinação de potência e dirigibilidade que o tornou um favorito entre entusiastas de carros esportivos em todo o mundo.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Nissan Skyline R32 apresenta um design elegante e esportivo que é instantaneamente reconhecível. Com suas linhas aerodinâmicas e faróis retráteis característicos, o R32 exala uma aura de agressividade e desempenho. Detalhes como a icônica grade dianteira em forma de "V" e as rodas de liga leve de cinco raios adicionam um toque de estilo ao visual do carro, destacando sua herança de corrida.</h1>
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
            <h1 class='data'>Além de seu design marcante, o Nissan Skyline R32 é conhecido por seu desempenho e manuseio excepcionais. Com sua tração nas quatro rodas avançada e suspensão multilink, o R32 oferece uma experiência de condução precisa e ágil, tornando-o um verdadeiro prazer de dirigir em estradas sinuosas ou na pista. Seu motor turbo alimentado entrega potência de forma linear, garantindo uma aceleração emocionante em todas as marchas.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Nissan Skyline R32 tem um impressionante histórico de sucesso nas pistas de corrida, tanto no Japão quanto internacionalmente. Sua reputação de desempenho robusto e capacidade de modificação o tornou um favorito entre os entusiastas de corrida e de tunagem. Com uma ampla gama de peças de aftermarket disponíveis, os proprietários podem personalizar e aprimorar o desempenho do R32 para atender às suas preferências individuais, mantendo viva a cultura do tuning japonesa.</h1>
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
            <h1 class='data'>Mesmo décadas após seu lançamento, o Nissan Skyline R32 continua a ser reverenciado como um clássico moderno e um ícone da cultura automotiva japonesa. Sua combinação única de estilo, desempenho e personalização fez dele um carro amado por entusiastas em todo o mundo. Com uma base de fãs dedicada e uma presença duradoura nas ruas e nas pistas, o R32 permanece como um dos carros mais influentes e adorados já produzidos pela Nissan.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}