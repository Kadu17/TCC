import React from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'

function CardNovaSenha() { //CARD PARA TELA DE NOVA SENHA
    return (
        <div className={'bg-white relative mt-20 w-9/12 h-full xl:h-5/6 2xl:w-7/12 3xl:w-6/12 pb-8 sm:w-4/6 sm:h-fit sm:mt-2 md:w-5/6 md:mt-2 md:h-fit '}>
            <img className={'sm:w-32 xl:w-56'} src={logoBosch} alt="" />
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
