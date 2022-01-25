import "./postagem.css";
import fotoPost1 from "../../Imagens/Aguia1.jpg";


export default function Postagem( { post } ){
    return(
        <>
      
       <div className="areaimagem">
           <img class="thumbnal" src={fotoPost1} alt=""/>
       </div>

       <div className="areatexto">
           <p className="texto">Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação profissional e tecnológica, ocorrido em Recife/PE, em maio de 2015, obtendo grande êxito na divulgação e comercialização do produto. Atualmente, além da utilização de material de banners, o grupo vem inserindo na sua produção outros tipos de materias, como tecido, couro e algodão cru.
               </p> 
       </div>
        </>
    )
}