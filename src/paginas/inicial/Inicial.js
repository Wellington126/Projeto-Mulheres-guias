import Cabecalho from "../../Componentes/cabecalho/Cabecalho";

import AreaPostagem from "../../Componentes/areaPostagem/AreaPostagem";
import Rodape from "../../Componentes/rodape/RodaPe";
import "./inicial.css"

export default function Inicial() { 
   return (
      <>
       <Cabecalho />

       <div className="appInicial">
           <AreaPostagem />
          
       </div>
       <Rodape />

    </>
   )
}