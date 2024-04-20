import "../Content/contentVariant.css";
import img1 from "../../../images/imagesLamborghini/huracan/1.png"
import img2 from "../../../images/imagesLamborghini/huracan/2.png"
import img3 from "../../../images/imagesLamborghini/huracan/3.png"
import img4 from "../../../images/imagesLamborghini/huracan/4.png"
import img5 from "../../../images/imagesLamborghini/huracan/5.png"

export default function ContentHuracan() {
    return (
        <div>
        <div className="title">
            <h1>LAMBORGHINI HURACÁN</h1>
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
            <h1 class='data'>A Lamborghini Huracán é um supercarro que evoca emoção e adrenalina em cada curva. Equipada com um motor V10 aspirado de 5.2 litros, a Huracán oferece uma potência excepcional de mais de 600 cavalos. Combinado com uma transmissão de dupla embreagem de sete velocidades e tração nas quatro rodas, este carro oferece uma aceleração impressionante e uma experiência de condução emocionante que é verdadeiramente inesquecível.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design da Lamborghini Huracán é uma expressão de pura agressividade e elegância. Suas linhas esculpidas e curvas aerodinâmicas não apenas aprimoram sua estética, mas também melhoram seu desempenho. Os detalhes exclusivos, como as entradas de ar proeminentes e as saídas de escape duplas, dão à Huracán uma presença imponente na estrada. Seu design distintivo faz com que seja instantaneamente reconhecível como um verdadeiro ícone automotivo.</h1>
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
            <h1 class='data'>Por dentro, a Lamborghini Huracán oferece um ambiente de condução focado e luxuoso. O cockpit é projetado para colocar o motorista no centro da ação, com controles intuitivos e um layout orientado para o desempenho. Os assentos esportivos oferecem suporte confortável durante viagens de alta velocidade, enquanto o sistema de infotainment mantém todos os ocupantes conectados e entretidos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte da linhagem de supercarros da Lamborghini, a Huracán carrega consigo um legado de performance e inovação. Cada aspecto deste carro é projetado para oferecer um desempenho de classe mundial, refletindo a paixão e a dedicação dos engenheiros da Lamborghini. Desde sua estreia, a Huracán tem sido amplamente elogiada por sua combinação de desempenho excepcional, estilo marcante e dirigibilidade emocionante.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos supercarros mais cobiçados do mundo, a Lamborghini Huracán é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ela permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações. A Huracán é uma verdadeira obra-prima da engenharia automotiva.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}