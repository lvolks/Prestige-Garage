import "./contentAbout.css";
import logo from "../../../images/logo-pg.png"

export default function ContentAbout(){
    return(
        <div>
            <div className="inf">
                <div className="words">
                    <h1 className="about">
                    Bem-vindo à Prestige Garage, sua galeria online exclusiva para os mais deslumbrantes e desejáveis carros de alto desempenho do mundo. Nossa página é um santuário para os amantes da beleza automotiva, onde cada clique revela uma nova obra-prima sobre rodas.
                    </h1>
                    <h1>
                    Na Prestige Garage, acreditamos que uma imagem vale mais que mil palavras. É por isso que nos dedicamos a capturar a essência e a elegância de cada carro em nossa coleção, proporcionando aos entusiastas uma experiência visual incomparável.
                    </h1>
                    <h1>
                    De supercarros icônicos a hiper carros raros, nossa galeria é um tributo à arte da engenharia automotiva. Cada foto é cuidadosamente selecionada para transmitir a emoção e a admiração que sentimos por essas máquinas extraordinárias.
                    </h1>
                </div>

                <div className="logopg">
                    <img src={logo} className="pg"></img>
                </div>
            </div>
        </div>
    )
}