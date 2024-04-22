import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMclaren/senna/1.png"
import img2 from "../../../images/imagesMclaren/senna/2.png"
import img3 from "../../../images/imagesMclaren/senna/3.png"
import img4 from "../../../images/imagesMclaren/senna/4.png"
import img5 from "../../../images/imagesMclaren/senna/5.png"

export default function ContentSenna() {
    return (
        <div>
        <div className="title">
            <h1>MCLAREN SENNA</h1>
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
            <h1 className='description'>CV: 800cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 335km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>A McLaren Senna é uma homenagem ao legado do lendário piloto brasileiro Ayrton Senna, representando o pináculo da engenharia automotiva e do desempenho sem concessões. Equipada com um motor V8 twin-turbo de 4.0 litros, a Senna produz uma potência extraordinária de mais de 800 cavalos. Com uma transmissão de dupla embreagem de sete velocidades e uma carroceria leve de fibra de carbono.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design da McLaren Senna é uma fusão de forma e função, com cada linha e detalhe sendo meticulosamente otimizado para performance máxima. Desde a dianteira agressiva até a traseira esculpida, cada elemento da Senna é projetado para maximizar a eficiência aerodinâmica e a estabilidade em altas velocidades. A asa traseira ajustável e os difusores dianteiro e traseiro contribuem para criar downforce significativo, garantindo uma aderência excepcional e uma experiência de condução sem igual.</h1>
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
            <h1 class='data'>Por dentro, a McLaren Senna oferece um ambiente de pilotagem totalmente orientado para o desempenho. O cockpit minimalista coloca o motorista no centro da ação, com controles intuitivos e um volante de corrida inspirado na Fórmula 1. Os materiais leves e de alta qualidade são usados em todo o interior, reduzindo o peso e aumentando a sensação de conexão com a estrada. Cada aspecto do interior é projetado para maximizar o desempenho e oferecer uma experiência de condução imersiva.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da linhagem de supercarros da McLaren, a Senna incorpora um legado de excelência nas pistas de corrida. Cada aspecto deste carro é afinado para oferecer um desempenho de classe mundial, refletindo a paixão e a dedicação dos engenheiros da McLaren. Desde sua estreia, a Senna tem sido elogiada por sua capacidade de aceleração impressionante, manejo ágil e frenagem poderosa, solidificando seu lugar como um dos supercarros mais impressionantes já produzidos.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos carros mais exclusivos do mundo, a McLaren Senna é mais do que apenas um veículo; é uma obra de arte sobre rodas e um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ela permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}