import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import { Link } from 'react-router-dom'


function Card_login() { //CARD PARA TELA DE LOGIN 
    function teste(){
        console.log('TESTE OK')
    }
    function teste2(){
        console.log('TESTE 2 OK')
    }
    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-8'}>
                    <Titulo h1='LOGIN'></Titulo>
                </div>
                <div className={'flex flex-col gap-5 items-center'}>
                    <InputRoxo label='Email'> </InputRoxo>
                    <InputRoxo label='Senha'> </InputRoxo>
                    <Botaoroxo txt='ENTRAR'></Botaoroxo>
                </div>

            </div>
            <div className={'flex gap-2 justify-center mt-10'}>
                <p> Esqueceu a senha?</p>
                <Link to='/RecuperarSenha' onClick={teste}><p> Recuperar</p></Link>
            </div>
            <div className={'flex gap-2 justify-center mt-3'}>
                <p> Ainda não possui uma conta? </p>
                <Link to='/Cadastro' onClick={teste2}> <p> Cadastre-se </p></Link>
            </div>
        </div>
    )
}

export default Card_login
