import "./sobre.css";
import Postagem from "../../Componentes/tutorias/Tutorias";
import fotoPost1 from "../../Imagens/produto1.jpg";
import fotoPost2 from "../../Imagens/produto2.jpg";
import fotoPost3 from "../../Imagens/produto3.jpg";
import fotoPost4 from "../../Imagens/produto4.jpg";
import fotoPost5 from "../../Imagens/produto5.jpg";
import fotoPost6 from "../../Imagens/produto6.jpg";




export default function sobre(){

     let postagem1 = {
                      "titulo": "Associção Mulheres Águias",
                       "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
                       "foto": fotoPost1}

     let postagem2 = {
                        "titulo": "Associção Mulheres Águias",
                         "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
                         "foto": fotoPost2}

                         let postagem3 = {
                            "titulo": "Associção Mulheres Águias",
                             "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
                             "foto": fotoPost3}

                             let postagem4 = {
                                "titulo": "Associção Mulheres Águias",
                                 "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
                                 "foto": fotoPost4}

                                 let postagem5 = {
                                    "titulo": "Associção Mulheres Águias",
                                     "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
                                     "foto": fotoPost5}

                                     let postagem6 = {
                                        "titulo": "Associção Mulheres Águias",
                                         "descricao": "Desde 2014, essas mulheres vem trabalhando na perspectivada economia solidária, com o assessoramento da incubadora tecnológica de empreendimentos solidários do IFPB (INCUTES/IFPB). Sua primeira produção se desenvolveu com a confecção de bolsas reutilizando banners, que teve oportunidade de lançamento no III fórum mundial de educação", 
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
        </>
    )
}