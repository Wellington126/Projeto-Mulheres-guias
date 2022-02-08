import "./barratopo.css";
import Fotologo from "../../Imagens/logo.ico";
import { Link } from "react-router-dom";

export default function Barratopo(){
    return(
        <>
        <div className="topo">

            <div className="topoesquerda"></div>

            <div className="topocentro">
            <ul className="topolista">

                <Link to="/" style={{textDecoration: 'none'}}>
                <li className="topolistaItem">Sobre</li>
                </Link>

                <Link to="/about" style={{textDecoration: 'none'}}>
                <li className="topolistaItem">Produtos</li>
                </Link>
                  
                <Link to="/contatos" style={{textDecoration: 'none'}}>
                <li className="topolistaItem">Contato</li>
                </Link>

            </ul>
        </div>

        <div className="topodireita">
            <img
            className="topoimg" 
            src = {Fotologo}
            />
        </div>

        </div>
        </>
    )
}