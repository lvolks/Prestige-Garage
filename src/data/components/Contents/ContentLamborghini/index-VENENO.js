import "../Content/contentVariant.css";
import img1 from "../../../images/imagesLamborghini/veneno/1.png"
import img2 from "../../../images/imagesLamborghini/veneno/2.png"
import img3 from "../../../images/imagesLamborghini/veneno/3.png"
import img4 from "../../../images/imagesLamborghini/veneno/4.png"
import img5 from "../../../images/imagesLamborghini/veneno/5.png"

export default function ContentVeneno() {
    return (
        <div>
        <div className="title">
            <h1>LAMBORGHINI VENENO</h1>
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
            <h1 class='data'>A Lamborghini Veneno é uma máquina exótica que encarna o espírito indomável da marca italiana. Equipada com um motor V12 aspirado de 6.5 litros, a Veneno produz uma potência impressionante de mais de 750 cavalos. Com um design agressivo e linhas angulares, este supercarro é uma visão futurista que não passa despercebida. Seu desempenho é tão exótico quanto sua aparência, capaz de atingir de 0 a 100 km/h em questão de segundos.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>A Lamborghini Veneno apresenta um design que parece ter sido esculpido de um bloco de metal por um ser de outro planeta. Suas linhas afiadas e agressivas combinam perfeitamente com sua natureza de alto desempenho. Elementos como a asa traseira ajustável e as entradas de ar amplas não são apenas estéticos, mas também funcionais, contribuindo para a aerodinâmica do carro e proporcionando uma experiência de condução emocionante.</h1>
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
            <h1 class='data'>Por dentro, a Lamborghini Veneno oferece um ambiente que lembra o cockpit de uma nave espacial. Os materiais de alta qualidade, como fibra de carbono e Alcantara, criam uma atmosfera de luxo e esportividade. Os bancos concha fornecem um suporte excepcional durante as curvas mais agressivas, enquanto o painel de instrumentos digital fornece ao motorista todas as informações necessárias para dominar essa fera nas ruas ou na pista.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>Como parte de uma série altamente limitada, a Lamborghini Veneno é mais do que apenas um carro; é uma obra de arte sobre rodas e um objeto de desejo para colecionadores e entusiastas de automóveis. Sua exclusividade e desempenho inigualável garantem que ela permaneça como uma das Lamborghinis mais cobiçadas já produzidas, mantendo seu valor ao longo do tempo e continuando a inspirar admiração por muitas gerações.</h1>
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
            <h1 class='data'>A Lamborghini Veneno é muito mais do que um supercarro; é um monstro das estradas que desafia os limites do possível. Seu rugido do motor V12 ecoa pelas ruas, anunciando sua presença imponente e capturando a atenção de todos ao seu redor. Com um design e desempenho que desafiam a imaginação, a Veneno representa o pináculo do automobilismo de alta performance e continua a ser uma das mais lendárias e icônicas Lamborghinis já fabricadas.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}