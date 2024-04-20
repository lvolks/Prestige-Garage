import "../Content/contentVariant.css";
import img1 from "../../../images/imagesKoenigsegg/agera/1.png"
import img2 from "../../../images/imagesKoenigsegg/agera/2.png"
import img3 from "../../../images/imagesKoenigsegg/agera/3.png"
import img4 from "../../../images/imagesKoenigsegg/agera/4.png"
import img5 from "../../../images/imagesKoenigsegg/agera/5.png"

export default function ContentAgera() {
    return (
        <div>
        <div className="title">
            <h1>KOENIGSEGG AGERA RS</h1>
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
            <h1 class='data'>O Koenigsegg Agera é um supercarro que redefine os limites do desempenho automotivo. Equipado com um motor V8 twin-turbo de 5.0 litros, o Agera produz uma potência incrível de mais de 1.000 cavalos. Combinado com uma transmissão de dupla embreagem de sete velocidades e tecnologia avançada de tração nas quatro rodas, este carro oferece uma aceleração impressionante e uma velocidade máxima de mais de 400 km/h, proporcionando uma boa experiência de condução.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do Koenigsegg Agera é uma expressão de pura aerodinâmica e elegância. Cada linha e curva do carro são meticulosamente projetadas para otimizar o fluxo de ar e maximizar a eficiência aerodinâmica. Os detalhes exclusivos, como as portas de borboleta e o sistema de escapamento central, dão ao Agera uma aparência única e distinta que o diferencia de qualquer outro supercarro na estrada.</h1>
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
            <h1 class='data'>Por dentro, o Koenigsegg Agera oferece um ambiente de luxo e tecnologia de ponta. O cockpit é projetado para oferecer o máximo de conforto e funcionalidade, com materiais de alta qualidade e acabamentos personalizados. Os assentos esportivos proporcionam suporte durante viagens de alta velocidade, enquanto o sistema de infotainment mantém os ocupantes conectados e entretidos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como resultado de anos de pesquisa e desenvolvimento meticuloso, o Koenigsegg Agera é um testemunho da dedicação da marca à excelência automotiva. Cada componente do carro é projetado e fabricado com precisão suíça, utilizando materiais de alta qualidade e tecnologia de ponta. Desde sua estrutura de fibra de carbono até seu sistema de suspensão ativa, cada aspecto do Agera é cuidadosamente projetado para oferecer desempenho excepcional em todas as condições de condução.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais exclusivos do mundo, o Koenigsegg Agera é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações. O Agera é uma verdadeira obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}