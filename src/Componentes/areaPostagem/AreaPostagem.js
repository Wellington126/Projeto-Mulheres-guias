import "./areapostagem.css";
import Postagem from "../postagem/Postagem";
import fotoPost1 from "../../Imagens/Aguia1.jpg";


export default function AreaPostagem(){

     let postagem1 = {
                      "titulo": "Associção Mulheres Águias",
                       "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
                       "foto": fotoPost1}

     return(
        <>
             <div className="posts">
                 <Postagem post={postagem1} />
    
             </div>
        </>
    )
}