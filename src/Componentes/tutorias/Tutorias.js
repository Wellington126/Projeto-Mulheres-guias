import "./tutorias.css";


export default function Tutorias( { post } ){
    return(
        <>

<div className="poststuto">
            
            <div className="posttuto">

                <img className="postImgtuto" src={post.foto} alt=""/>
                
                
                  
                

                <div className="postInfo">
                   

                    <div className="postTitulo">
                        <span>{post.titulo}</span>
                    </div>

                   
                </div>

                <p className="postDesc">
                    {post.descricao}
                </p>

            </div>

        </div>

        </>
    )
}


