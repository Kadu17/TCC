import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'

function CardNovaSenha() { //CARD PARA TELA DE NOVA SENHA
    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-8'}>
                    <Titulo h1='NOVA SENHA'></Titulo>
                </div>
                <div className={'flex flex-col gap-5 items-center'}>
                    <InputRoxo > </InputRoxo>
                    <InputRoxo> </InputRoxo>
                    <Botaoroxo txt='ENTRAR'></Botaoroxo>
                </div>
            </div>
        </div>
    )
}

export default CardNovaSenha
