import "./contentDev.css";
import pic from "../../../images/me.png"

export default function ContentDev(){
    return(
        <div>
            <div className="informations">
                <div className="aboutMe">
                    <h1 className="about">
                    Bem-vindo à minha página, meu nome é Lucas Volkweis, tenho 20 anos e sou um desenvolvedor full stack.
                    </h1>
                    <h1>
                    Atualmente estou no sétimo período do curso "Engenharia de Software" na Universidade Positivo, localizada em Curitiba - Paraná.
                    </h1>
                    <h1>
                    Realizei esse projeto "Prestige Garage" com intuito em demonstrar meus conhecimentos em <blank>HTML, CSS e JavaScript</blank>, utilizando o framework chamado <blanck>"React"</blanck> e suas funcionalidades.
                    </h1>
                    <h1>
                    Sinta-se a vontade para explorar toda o projeto, em caso de necessidade de contato, pode falar comigo através das minhas redes localizadas no Rodapé e na seção "Contato".
                    </h1>
                </div>

                <div className="logoMe">
                    <img src={pic} className="me"></img>
                </div>
            </div>
        </div>
    )
}