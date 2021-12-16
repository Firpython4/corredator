import '../styles/LoginPage.css';
import { useState } from 'react';
import {auth} from '../firebase/firebase.js'
import $ from 'jquery';

export default function LoginPage(props){
    function Login(){
        let emailLogin = document.querySelector('.emailLogin').value
        let senhaLogin =  document.querySelector('.senhaLogin').value
        auth.signInWithEmailAndPassword(emailLogin, senhaLogin)
        .then((credentials)=>{
            console.log(props)
            return true
        })
        .catch((erro)=>{
            console.log(erro.message)
        })
    }


    function clickInput(val){
        val.stopPropagation();
        document.querySelector('.'+val.target.id).focus()
        $('span').css({'color':'gray'}) 
        $('span#'+val.target.id).css({'color':'var(--mainColor)'}) 
        $('.input-container').css({'border':'1px solid #ccc'})
        $('div#'+val.target.id).css({'border':'2px solid var(--mainColor)'})
        if (document.querySelector('.emailLogin').value==="") {
            $('span#emailLogin').animate({'top':'15px','fontSize':'20px','fontWeight':'400'},100)

        }else{
            $('span#emailLogin').animate({'top':'5px','fontSize':'14px','fontWeight':'900'},100) 
            
        }
        if (document.querySelector('.senhaLogin').value==="") {
            $('span#senhaLogin').animate({'top':'15px','fontSize':'20px','fontWeight':'400','color':'gray',},100)  

        }else{
            $('span#senhaLogin').animate({'top':'5px','fontSize':'14px','fontWeight':'900','color':'red',},100) 

        }
        $('span#'+val.target.id).animate({'top':'5px','fontSize':'14px','fontWeight':'900','color':'red',},100)  
    }
    function stop(){
        $('span#emailLogin').css({'color':'gray'}) 
        $('span#senhaLogin').css({'color':'gray'}) 
        $('div#senhaLogin').css({'border':'1px solid #ccc'})
        $('div#emailLogin').css({'border':'1px solid #ccc'})
        if (document.querySelector('.emailLogin').value==="") {
            $('span#emailLogin').animate({'top':'15px','fontSize':'20px','fontWeight':'400','color':'gray',},100)  
        }else{
            $('span#emailLogin').animate({'top':'5px','fontSize':'14px','fontWeight':'900','color':'red',},100) 
        }
        if (document.querySelector('.senhaLogin').value==="") {
            $('span#senhaLogin').animate({'top':'15px','fontSize':'20px','fontWeight':'400','color':'gray',},100)  
        }else{
            $('span#senhaLogin').animate({'top':'5px','fontSize':'14px','fontWeight':'900','color':'red',},100) 
        }
    }

    return(
        <div className="form-container" onClick={()=>{stop()}}>
            <div className="form">
                <h2>LogIn</h2>
                <div id="emailLogin" className="input-container"onClick={(val)=>{clickInput(val)}}>
                    <input id="emailLogin" type="email" className="emailLogin"></input>
                    <span id="emailLogin">Email</span>
                </div>
                <div id="senhaLogin" className="input-container" onClick={(val)=>{clickInput(val)}}>
                    <input id="senhaLogin"type="password"  className="senhaLogin"></input>
                    <span id="senhaLogin">Senha</span>
                </div>
                <input type="submit" value="Entrar" onClick={()=>{Login()}}></input>
                <a><b>Esqueceu sua senha?</b></a>
            </div>
        </div>
    )
}