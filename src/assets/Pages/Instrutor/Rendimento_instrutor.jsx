import React, { useState } from "react";
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'
import { Link } from 'react-router-dom'
import Chart from "../../Componentes/Chart";


function Rendimento_instrutor() { //TELA PARA VISUALIZAR A AUTO AVALIAÇÃO DO APRENDIZ

  let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']
  let aprendiz = ['Eduarda Rabelo Oliveira', 'Julia Roberta Veloso Guiraldeli', 'Carlos Eduardo Faustino Barbosa']
  let tpCriterio = ['Avaliação', 'Auto avaliação']
  let Criterio = ['Profissionalismo', 'ingles', 'Conhecimento teorioco']
  let aprendiz1 = ['Eduarda Rabelo Oliveira', 'Julia Roberta Veloso Guiraldeli', 'Carlos Eduardo Faustino Barbosa']


  const [turma1, setTurma1] = useState('')
  const [aluno, setAluno] = useState('')
  const [semes, setSemes] = useState('')
  const [criterioTp, setTpCriterio] = useState('')
  const [criterio, setCriterio] = useState('')
  const [aluno1, setAluno1] = useState('')

  const finalizar = (e) => {
    console.log('turma:', turma1)
    console.log('Aprendiz:', aluno)
    console.log('semestre:', semes)
  }
  return (
    <div className={`w-full justify-center sm:w-full sm:p-6 md:w-full md:p-8 lg:w-full lg:p-14 xl:w-full xl:p-20 `}>
      <h1 className={`text-2xl font-bold p-6`}>RENDIMENTO</h1>
      <div className={'flex flex-row gap-5 p-5 sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:justify-items-center 2xl:justify-between'}>
        <Filtro id='turma' label='Selecione a turma' optionList={turma} value={turma1} onChange={(e) => (setTurma1(e.target.value))}></Filtro>
        <Filtro id='aprendiz' label='Selecione o aprendiz' optionList={aprendiz} value={aluno} onChange={(e) => (setAluno(e.target.value))}></Filtro>
        <Filtro id='semestre' label='Selecione o tipo de criterio' optionList={tpCriterio} value={criterioTp} onChange={(e) => (setTpCriterio(e.target.value))}></Filtro>
      </div>
      <div className={'flex flex-row gap-5 p-5 sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:justify-items-center 2xl:justify-between grid-rows-2'}>
        <Filtro id='semestre' label='Selecione outro aprendiz' optionList={aprendiz1} value={aluno1} onChange={(e) => (setAluno1(e.target.value))}></Filtro>
        <Filtro id='semestre' label='critério' optionList={Criterio} value={criterio} onChange={(e) => (setCriterio(e.target.value))}></Filtro>
        <div className={'flex sm:justify-end sm:p-3 md:justify-end md:p-3 lg:justify-end lg:p-3 2xl:w-80 2xl:p-1'}>
          <Link><Botao txt='FINALIZAR' onClick={finalizar}></Botao></Link>
        </div>
      </div>

      <div className={'flex justify-center mt-5 sm:w-full'}>
        <Chart />
      </div>

    </div>
  )
}

export default Rendimento_instrutor