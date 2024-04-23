import React, { useState } from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'


function CardRecuperarSenha() { //CARD PARA TELA DO CODIGO DE RECUPERAÇÃO DE SENHA 
    

    const [codigo, setCodigo] = useState('')

    const recuperar = (e) => {
        console.log('codigo:' , codigo)
    }

    return (
        <div className={'bg-white relative mt-20 w-7/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex flex-col items-center'}>
                <div className={'flex mt-10 mb-3'}>
                    <Titulo h1='RECUPERAR SENHA'></Titulo> 
                </div>
                <div className={'flex flex-col gap-5 mt-5 items-center'}>
                    <h2 className={'font-semibold'}>Digite abaixo o código enviado no seu email: allana123@gmail.com <br/> para recuperar sua senha. Caso o código não esteja na sua caixa de entrada, verifique o spam.</h2>
                    <InputRoxo value={codigo} onChange={(e) => {setCodigo (e.target.value)}}> </InputRoxo>

                    <Botaoroxo txt='VERIFICAR' onClick={recuperar}></Botaoroxo>
                </div>
            </div>
        </div>
    )
}




export default CardRecuperarSenha
