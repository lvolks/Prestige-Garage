import "../Content/contentVariant.css";
import img1 from "../../../images/imagesBmw/m8/1.png"
import img2 from "../../../images/imagesBmw/m8/2.png"
import img3 from "../../../images/imagesBmw/m8/3.png"
import img4 from "../../../images/imagesBmw/m8/4.png"
import img5 from "../../../images/imagesBmw/m8/5.png"

export default function ContentM8() {
    return (
        <div>
        <div className="title">
            <h1>BMW M8 COMPETITION</h1>
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
            <h1 className='description'>CV: 625cv</h1>
        </div>

        <div>
            <h1 className='description'>Velocidade máxima: 305km/h</h1>
        </div>

        </div>

        <div className='information'>
            <h1 class='data'>O BMW M8 personifica a essência da performance M da BMW, combinando potência bruta, elegância e luxo em um pacote impressionante. Como o ápice da série BMW Série 8, o M8 é uma manifestação da engenharia de alto desempenho da BMW, oferecendo uma experiência de condução emocionante e indulgente. Com sua combinação de desempenho dinâmico, design imponente e tecnologia avançada, o M8 é um verdadeiro carro esportivo de elite.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>O BMW M8 apresenta um design expressivo e agressivo que exala presença e sofisticação nas ruas. Com sua grade dianteira ampliada, entradas de ar proeminentes e linhas musculosas, o M8 transmite uma sensação de força e velocidade. Detalhes como o teto de fibra de carbono, saias laterais aprimoradas e o difusor traseiro aerodinâmico não apenas melhoram a estética, mas também contribuem para a eficiência aerodinâmica e estabilidade em altas velocidades.</h1>
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
            <h1 class='data'>Equipado com um motor V8 TwinPower Turbo de alto desempenho, o BMW M8 oferece uma potência excepcional que desafia os limites da adrenalina. Com mais de 600 cavalos de potência disponíveis, o M8 é capaz de acelerar de 0 a 100 km/h em menos de 3 segundos e atingir velocidades de topo impressionantes. Sua transmissão automática de oito velocidades e tração nas quatro rodas M xDrive garantem uma entrega de potência suave e controle excepcional em todas as condições de condução.</h1>
        </div>

        </div>

        </div>

        <div className='section'>

        <div className='init'>

        <div className='information-second'>
            <h1 class='data'>No interior, o BMW M8 oferece um ambiente luxuoso e confortável, onde cada detalhe foi cuidadosamente projetado para aprimorar a experiência de condução. Materiais de alta qualidade, como couro Merino, fibra de carbono e alumínio, são habilmente integrados para criar uma atmosfera de elegância e sofisticação. Recursos como o sistema de infoentretenimento BMW Live Cockpit Professional e os assentos esportivos M garantem uma experiência de condução indulgente e conectada.</h1>
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
            <h1 class='data'>O BMW M8 é mais do que apenas um carro esportivo; é um tributo à rica tradição M da BMW e ao compromisso contínuo com a excelência automotiva. Como um dos modelos mais exclusivos e emocionantes da linha BMW, o M8 continua a cativar entusiastas e motoristas exigentes em todo o mundo. Sua presença nas ruas e nas pistas é um testemunho do legado duradouro da BMW como uma das marcas mais renomadas e respeitadas no mundo automotivo.</h1>
        </div>

        </div>

        </div>

        </div>

        </div>
    )
}