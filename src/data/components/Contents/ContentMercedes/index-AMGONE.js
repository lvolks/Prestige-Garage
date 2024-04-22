import "../Content/contentVariant.css";
import img1 from "../../../images/imagesMercedes/amgone/1.png"
import img2 from "../../../images/imagesMercedes/amgone/2.png"
import img3 from "../../../images/imagesMercedes/amgone/3.png"
import img4 from "../../../images/imagesMercedes/amgone/4.png"
import img5 from "../../../images/imagesMercedes/amgone/5.png"

export default function ContentAmgone() {
    return (
        <div>
        <div className="title">
            <h1>MERCEDES AMG ONE</h1>
        </div>

        <div className='ev'>

        <div className='section'>

        <div className="carIMG">
            <img className='image' src={img1}></img>
        </div>

        <div className='init'>

        <div className='kmhp'>

        <div>
            <h1 className='description'>0-100km/h em 2,9s</h1>
        </div>

        <div>
            <h1 className='description'>CV: 1.063cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 352km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O Mercedes-AMG One é um hipercarro que redefine os limites da tecnologia automotiva. Equipado com um sistema de propulsão híbrido derivado da Fórmula 1, este carro de alto desempenho combina um motor V6 turbo de 1.6 litros com quatro motores elétricos para produzir mais de 1.000 cavalos de potência. Combinando o poder de um carro de corrida com a praticidade de um supercarro de rua.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O design do Mercedes-AMG One é uma obra de arte em movimento, com linhas fluidas e aerodinâmicas que refletem sua natureza de alta performance. Seu corpo esculpido é otimizado para maximizar a eficiência aerodinâmica e a estabilidade em altas velocidades, enquanto os detalhes de estilo exclusivos, como as entradas de ar proeminentes e o difusor traseiro agressivo, enfatizam sua pedigree de corrida. Cada elemento do AMG One é projetado para impressionar visualmente e melhorar o desempenho dinâmico do carro.</h1>
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
            <h1 class='data'>Por dentro, o Mercedes-AMG One oferece uma experiência de condução futurista e luxuosa. O cockpit é projetado para colocar o motorista no controle, com um volante de corrida inspirado na Fórmula 1 e uma tela digital personalizável que fornece acesso a uma variedade de informações de desempenho. O sistema de infotainment oferece conectividade avançada, enquanto os sistemas de assistência ao motorista garantem uma condução segura e tranquila, mesmo em condições extremas.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como um verdadeiro descendente da Fórmula 1, o Mercedes-AMG One carrega consigo um legado de competição e inovação. Cada aspecto deste hipercarro é projetado e afinado para oferecer um desempenho de classe mundial, refletindo a paixão e a dedicação dos engenheiros da AMG. Desde sua concepção, o AMG One tem sido amplamente elogiado por sua tecnologia avançada e desempenho impressionante, estabelecendo novos padrões de excelência na indústria automotiva.</h1>
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
            <h1 class='data'>Com sua produção altamente limitada e seu status como um dos carros mais exclusivos do mundo, o Mercedes-AMG One é mais do que apenas um veículo; é um símbolo de status e prestígio. Sua exclusividade e desempenho incomparável garantem que ele permaneça como um objeto de desejo para colecionadores e entusiastas de automóveis em todo o mundo, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}