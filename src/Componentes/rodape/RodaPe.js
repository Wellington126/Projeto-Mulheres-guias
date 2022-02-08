import React from "react";
import logoIF from "../../Imagens/logoIF.png"
import "./rodaPe.css";

export default function Rodape(){
    return (
        <>
        <div class="site-footer">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-6">
                    <img class="logoifpb" src={logoIF} alt=""/>
                    <p class="text-justify">WebSite Desenvolvido por <a href="#"><b>Pedro</b></a>, <a href="#"><b>Samara</b></a> e <a href="https://github.com/"><b>Wellington</b>, alunos do IFPB Campus Pedras de Fogo - PB.</a> <i></i></p>
                </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2022 Todos os Direitos Reservados.</p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}