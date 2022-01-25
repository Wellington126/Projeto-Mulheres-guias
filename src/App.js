import Barratopo from "./Componentes/barratopo/Barratopo";
import Inicial from "./paginas/inicial/Inicial";
import Sobre from "./paginas/sobre/Sobre";
import Contatos from "./paginas/contatos/Contato";

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

export default function App() {
  return (
    <Router>

       <Barratopo />

       <Switch>

         <Route exact path="/">
           <Inicial />
         </Route>

         <Route path="/about">
           <Sobre /> 
         </Route>

         <Route path="/Contatos">
           <Contatos /> 
         </Route>


       </Switch>
     
    </Router>  
  )
}
