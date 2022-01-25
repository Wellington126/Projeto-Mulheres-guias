import "./barralateral.css";
import FotoModelo from "../../Imagens/produto1.jpg";
import foto1 from "../../Imagens/produto2.jpg"

export default function Barralateral(){
    return(
        <div className="barraLado">

            <div className="barraLadoItem">

                <span className="barraLadoTitulo">Sobre Mim</span>

                <img 
                      src={FotoModelo}
                      alt=""
                />

                <img 
                      src={foto1}
                      alt=""
                />

                <p>
                    Testando um conjunto de frase totalmente sem sentido.
                    Testando um conjunto de frase totalmente sem sentido.
                    Testando um conjunto de frase totalmente sem sentido.
                </p>

                <div className="barraLadoItem">

                    <span className="barraLadoTitulo">CATEGORIAS</span>
                   
                   

                </div>

            </div>

        </div>
    )
}