import "../Content/contentVariant.css";
import img1 from "../../../images/imagesKoenigsegg/regera/1.png"
import img2 from "../../../images/imagesKoenigsegg/regera/2.png"
import img3 from "../../../images/imagesKoenigsegg/regera/3.png"
import img4 from "../../../images/imagesKoenigsegg/regera/4.png"
import img5 from "../../../images/imagesKoenigsegg/regera/5.png"

export default function ContentRegera() {
    return (
        <div>
        <div className="title">
            <h1>KOENIGSEGG REGERA</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 1,8s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 1500cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 404km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Koenigsegg Regera representa uma revolução na indústria automotiva, combinando potência extrema com eficiência inovadora. Equipado com um motor V8 twin-turbo de 5.0 litros e três motores elétricos, o Regera produz uma potência combinada de mais de 1.500 cavalos. Esta configuração híbrida permite uma aceleração instantânea e uma experiência de condução emocionante, ao mesmo tempo que oferece eficiência energética sem precedentes.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Koenigsegg Regera apresenta um design elegante e aerodinâmico que é ao mesmo tempo impressionante e funcional. Cada linha e curva do carro são projetadas para otimizar o fluxo de ar e maximizar a eficiência aerodinâmica. Detalhes como as portas de abertura para cima e o difusor traseiro integrado não apenas aprimoram o estilo, mas também melhoram o desempenho do carro, proporcionando downforce adicional e estabilidade em altas velocidades.</h1>
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
            <h1 class='data'>Por dentro, o Koenigsegg Regera oferece um ambiente luxuoso e tecnológico. O cockpit é projetado para oferecer conforto e funcionalidade, com materiais de alta qualidade e acabamentos personalizados. Os assentos esportivos são ergonomicamente projetados para proporcionar suporte durante viagens de alta velocidade, enquanto o sistema de infotainment mantém os ocupantes conectados e entretidos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Koenigsegg Regera é um exemplo de engenharia inovadora e precisão sueca. Cada componente do carro é projetado e fabricado com meticulosidade, utilizando materiais de alta qualidade e tecnologia de ponta. Desde sua estrutura de fibra de carbono até seu sistema de transmissão Direc Drive revolucionário, cada aspecto do Regera é cuidadosamente desenvolvido para oferecer desempenho excepcional e uma experiência de condução sem igual.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais exclusivos do mundo, o Koenigsegg Regera é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações. O Regera é uma verdadeira obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}