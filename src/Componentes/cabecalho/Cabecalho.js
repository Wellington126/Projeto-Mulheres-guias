import "./cabecalho.css";
import FotoFundo from "../../Imagens/logotopo.png";

export default function Cabecalho(){
    return(

        <div className="cabecalho">

            <div className="cabecalhoTitulo">

                <span className="cabecalhoTituloCima">  </span>
                <span className="cabecalhoTituloBaixo"> </span>

                <img 
                     className="cabecalhoImg"
                     src={FotoFundo}
                     alt=""
                />


            </div>
        
        </div>
    )
}