import React, { useState } from 'react'
import Filtro from '../../Componentes/Filtro'
import Input from '../../Componentes/Input'
import Botao from '../../Componentes/Botao'
import { HiMagnifyingGlass } from "react-icons/hi2";

function Criterios() { //TELA PARA CADASTROS DE CRITERIOS

    let curso = ['Digital Solutions', 'Mecatrônica', 'Manufatura Digital']
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre']

    const [criterio, setCriterio] = useState('')
    const [turma, setTurma] = useState('')
    const [descricao, setDescricao] = useState('')
    const [semes, setSemes] = useState('')
    const [editcriterio, setEditcriterio] = useState('')

    const cadastrar = (e) => {
        console.log('criterio:', criterio)
        console.log('turma:', turma)
        console.log('Descrição:', descricao)
        console.log('Semestre:', semes)
        console.log('Criterio editado:', editcriterio)
    }

    return (
        <div className={`flex flex-col h-full justify-around mx-10 gap-3`}>
            <h1 className={`text-2xl font-bold`}>CRITÉRIO</h1>
            <h2 className={`text-lg font-bold`}>Cadastrar critério</h2>
            <p className={`text-base font-semibold`}>Preencha as informações abaixo para adicionar um novo critério: </p>
            <Filtro id="curso" label='Selecione o curso que possui esse critério.' optionList={curso} value={turma} onChange={(e) => { setTurma(e.target.value) }}></Filtro>
            <Input label='Nome do critério' value={criterio} onChange={(e) => { setCriterio(e.target.value) }}></Input>
            <Input label='Descrição do critério: ajuda o aprendiz ou instrutor a saber mais informações' value={descricao} onChange={(e) => { setDescricao(e.target.value) }}></Input>
            <Filtro id="semestre" label='Selecione o(os) semestre(s) que esse critério deve aparecer.' optionList={semestre} value={semes} onChange={(e) => { setSemes(e.target.value) }}></Filtro>
            <div className={'flex justify-end'}>
                <Botao txt='CADASTRAR' onClick={cadastrar}></Botao>
            </div>
            <h2 className={`text-lg font-bold`}>Editar ou excluir critério</h2>
            <div className={'flex items-center gap-2'}>
                <Input label='Pesquise pelo critério que deseja editar ou excluir' value={editcriterio} onChange={(e) => { setEditcriterio(e.target.value) }}></Input>
                <HiMagnifyingGlass className={`size-8 fill-blue-400 mt-5`} />
            </div>
            <div className={`w-full h-20 bg-barraedit flex gap-36 justify-center items-center `}>
                <p className={`text-base font-bold`}>Inglês</p>
                <p className={`text-base font-bold`}>Técnico em Desenvolvimento de Sistemas </p>
                <p className={`text-base font-bold`}>Vanessa Silva </p>
                <p className={`text-base font-bold`}>EDITAR </p>
                <p className={`text-base font-bold`}>EXCLUIR </p>

            </div>
        </div>
    )
}

export default Criterios
