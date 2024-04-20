import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMclaren/720s/1.png"
import img2 from "../../../images/imagesMclaren/720s/2.png"
import img3 from "../../../images/imagesMclaren/720s/3.png"
import img4 from "../../../images/imagesMclaren/720s/4.png"
import img5 from "../../../images/imagesMclaren/720s/5.png"

export default function ContentS720() {
    return (
        <div>
        <div className="title">
            <h1>MCLAREN 720S</h1>
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
            <h1 class='data'>O McLaren 720S é um supercarro que desafia os limites do desempenho automotivo. Equipado com um motor V8 twin-turbo de 4.0 litros, este carro produz uma potência excepcional de mais de 700 cavalos. Combinado com uma transmissão de dupla embreagem de sete velocidades e tração traseira, o 720S oferece uma aceleração impressionante e uma velocidade máxima de mais de 340 km/h, proporcionando uma experiência de condução verdadeiramente emocionante e emocionante.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do McLaren 720S é uma expressão de engenharia avançada e estilo distinto. Sua carroceria escultural é esculpida para otimizar a aerodinâmica e a refrigeração do motor, enquanto elementos como as portas de tesoura e as saídas de ar laterais criam uma estética única e dinâmica. Cada linha e detalhe do 720S não apenas impressionam visualmente, mas também contribuem para o desempenho dinâmico excepcional do carro.</h1>
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
            <h1 class='data'>Por dentro, o McLaren 720S oferece um ambiente luxuoso e tecnologicamente avançado. O cockpit é projetado para combinar conforto e funcionalidade, com materiais de alta qualidade e acabamentos sofisticados em todo o interior. O sistema de infotainment oferece acesso a uma variedade de recursos de entretenimento e conectividade, enquanto os sistemas de assistência ao motorista garantem uma condução segura e tranquila, mesmo em situações extremas.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da linhagem de supercarros da McLaren, o 720S incorpora um legado de excelência automotiva e inovação tecnológica. Cada aspecto deste carro é projetado para oferecer um desempenho excepcional em pista e na estrada, refletindo a paixão e a dedicação dos engenheiros da McLaren. Desde seu lançamento, o 720S tem sido aclamado pela crítica e pelo público por sua combinação de desempenho de classe mundial, estilo marcante e artesanato meticuloso.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais cobiçados do mundo, o McLaren 720S é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações. O 720S é uma verdadeira obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}