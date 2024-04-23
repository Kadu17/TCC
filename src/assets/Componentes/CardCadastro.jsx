import React from 'react'
import Botaoroxo from './Botaoroxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import { Link } from 'react-router-dom'

    
function CardCadastro() { //CARD PARA TELA DE ESCOLHA DO CARGO PARA CADASTRO
    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-14'}>
                    <Titulo h1='SELECIONE SEU CARGO'></Titulo>
                </div>
                <div className={'flex flex-col gap-4 items-center'}>
                    <Link to='/Cadastro_de_Aprendiz'><Botaoroxo txt='APRENDIZ'></Botaoroxo></Link>
                    <Link to='/CadastroGestor'><Botaoroxo txt='INSTRUTOR'></Botaoroxo></Link>
                    <Link to='/CadastroGestor'><Botaoroxo txt='GESTOR'></Botaoroxo></Link>
                </div>
            </div>
        </div>
    )
}

export default CardCadastro
