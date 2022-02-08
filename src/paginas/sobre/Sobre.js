import "./sobre.css";
import Postagem from "../../Componentes/tutorias/Tutorias";
import fotoPost1 from "../../Imagens/produto1.jpg";
import fotoPost2 from "../../Imagens/produto2.jpg";
import fotoPost3 from "../../Imagens/produto3.jpg";
import fotoPost4 from "../../Imagens/produto4.jpg";
import fotoPost5 from "../../Imagens/produto5.jpg";
import fotoPost6 from "../../Imagens/produto6.jpg";
import Rodape from "../../Componentes/rodape/RodaPe";





export default function sobre(){

     let postagem1 = {
                       "titulo": "Miniaturas de sófas.",
                       "descricao": "Temos em diversas estampas, confeccionados com tecido madeira e algodão.", 
                       "foto": fotoPost1}

     let postagem2 = {
                        "titulo": "Necessaire",
                        "descricao": "Personalizamos o bordado com conteúdo de sua preferência.", 
                        "foto": fotoPost2}

     let postagem3 = {
                        "titulo": "Sacola multiuso.",
                        "descricao": "Confeccionada com banners reutilizados.", 
                        "foto": fotoPost3}

      let postagem4 = {
                        "titulo": "Toalhas de rosto.",
                        "descricao": "Bordadas com conteúdo de preferência do cliente.",
                        "foto": fotoPost4}

      let postagem5 = {
                        "titulo": "Bolsa esportiva",
                        "descricao": "De tecido personalizada com o bordado de preferência do cliente.", 
                        "foto": fotoPost5}

       let postagem6 = {
                         "titulo": "Miniaturas de cama",
                         "descricao": "Temos em diversas estampas, confeccionados com tecido madeira e algodão.", 
                         "foto": fotoPost6}

                                        
     return(
        <>
             <div className="produtos">
                 <Postagem post={postagem1} />
                 <Postagem post={postagem2} />
                 <Postagem post={postagem3} />
                 <Postagem post={postagem4} />
                 <Postagem post={postagem5} />
                 <Postagem post={postagem6} />
                
             </div>
             
             <Rodape />
              
        </>
    )
}