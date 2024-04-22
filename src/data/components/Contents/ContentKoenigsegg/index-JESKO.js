import "../Content/contentVariant.css";
import img1 from "../../../images/imagesKoenigsegg/jesko/1.png"
import img2 from "../../../images/imagesKoenigsegg/jesko/2.png"
import img3 from "../../../images/imagesKoenigsegg/jesko/3.png"
import img4 from "../../../images/imagesKoenigsegg/jesko/4.png"
import img5 from "../../../images/imagesKoenigsegg/jesko/5.png"

export default function ContentJesko() {
    return (
        <div>
        <div className="title">
            <h1>KOENIGSEGG JESKO</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,8s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 1600cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 531km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Koenigsegg Jesko é uma máquina de velocidade construída para redefinir os limites do que é possível em um supercarro. Equipado com um motor V8 twin-turbo de 5.0 litros, o Jesko produz uma potência alucinante de mais de 1.600 cavalos quando abastecido com E85. Combinado com uma transmissão de nove marchas de embreagem úmida Light Speed ​Transmission (LST), este supercarro oferece uma aceleração brutal e uma velocidade máxima estimada de mais de 480 km/h.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Koenigsegg Jesko apresenta um design que é tanto uma obra de arte quanto uma expressão de engenharia avançada. Suas linhas fluidas e curvas aerodinâmicas são esculpidas para cortar o ar com eficiência, proporcionando downforce e estabilidade excepcionais em altas velocidades. Elementos como as portas de abertura para cima e as saídas de ar ativas contribuem para sua presença imponente na estrada.</h1>
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
            <h1 class='data'>Por dentro, o Koenigsegg Jesko oferece um ambiente de luxo e tecnologia de ponta. O cockpit é uma mistura de artesanato meticuloso e inovação moderna, com materiais de alta qualidade e acabamentos personalizados. Os assentos ergonômicos oferecem conforto durante viagens de alta velocidade, enquanto o sistema de infotainment mantém os ocupantes conectados e entretidos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O Koenigsegg Jesko é uma obra-prima de engenharia sueca, com cada aspecto do carro projetado para oferecer desempenho excepcional e confiabilidade incomparável. Desde sua estrutura de fibra de carbono até sua suspensão ativa Triplex, cada componente é fabricado com precisão e atenção aos detalhes. O Jesko representa o auge da tecnologia automotiva e a dedicação incansável da Koenigsegg à busca da perfeição.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais cobiçados do mundo, o Koenigsegg Jesko é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações. O Jesko é uma verdadeira obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}