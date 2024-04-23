import React from 'react'
import fundo from '../../Imgs/Fundo.jpg'
import Card_login from '../../Componentes/Card_login'



function Login() { //TELA DE LOGIN
    return (
        <div className={'flex items-center justify-center'}>
            <img src={fundo} className={'w-full flex absolute'} alt="" />
            <Card_login></Card_login>
        </div>
    )
}

export default Login
