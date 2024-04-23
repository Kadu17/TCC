import React, { useState } from 'react'
import Botaoroxo from './Botaoroxo'
import InputRoxo from './InputRoxo'
import Titulo from './Titulo'
import logoBosch from '../Imgs/logoBosch.png'
import FiltroRoxo from './FiltroRoxo'


function CardCadastro_Aprendiz() { //CARD PARA CADASTRO DO APRENDIZ
    
    let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [turma2, setTurma2] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')

    const cadastrar = (e) => {
        console.log ('nome:', nome)
        console.log ('email:', email)
        console.log ('turma:', turma2)
        console.log ('senha:', senha)
        console.log ('confirmar:', confirmar)
    }

    return (
        <div className={'bg-white relative mt-20 w-9/12 h-screenP '}>
            <img src={logoBosch} alt="" />
            <div className={'flex justify-center mt-7 mb-8'}>
                <Titulo h1='CADASTRO'></Titulo>
            </div>
            <div className={'flex justify-evenly items-center'}>
                <div className={'flex flex-col gap-5'}>
                    <InputRoxo label='Nome completo' value={nome} onChange={(e) => {setNome (e.target.value)}}> </InputRoxo>
                    <InputRoxo label='Email' value={email} onChange={(e) => {setEmail (e.target.value)}}> </InputRoxo>
                    <FiltroRoxo id="turma2" label='Selecione a turma' value={turma2} onChange={(e) => {setTurma2 (e.target.value)}} optionList={turma} ></FiltroRoxo>

                </div>
                <div className={'flex flex-col gap-5'}>
                    <InputRoxo label='Senha ' value={senha} onChange={(e) => {setSenha (e.target.value)}}> </InputRoxo>
                    <InputRoxo label='Confirma senha' value={confirmar} onChange={(e) => {setConfirmar (e.target.value)}}> </InputRoxo>
                </div>


            </div>
            <div className={'flex justify-center mt-8'}>
                <Botaoroxo txt='CRIAR' onClick={cadastrar}></Botaoroxo>
            </div>

        </div>
    )
}

export default CardCadastro_Aprendiz
