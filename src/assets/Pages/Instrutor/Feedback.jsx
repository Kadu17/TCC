import React from 'react'
import Filtro from '../../Componentes/Filtro'
import Card from '../../Componentes/Card'

function Feedback() { //TELA PARA DAR O FEEDBACK COM O APRENDIZ
    
    let turma = ['DS 6', 'DS 7', 'DS 8', 'DS 9', 'DS 10']
    let aprendiz = ['Eduarda Rabelo Oliveira', 'Julia Roberta Veloso Guiraldeli', 'Carlos Eduardo Faustino Barbosa']

    return (
        <div className={`flex flex-row justify-between gap-4 mt-10 mx-10 sm:flex-col sm:gap-10`}>
            <div className={'flex flex-col sm:gap-5'}>
            <h1 className={`text-2xl font-bold`}>FEEDBACK</h1>
            <Filtro id="turma" label='Selecione a turma' optionList={turma} ></Filtro>
            <Filtro id="aprendiz" label='Selecione o aprendiz' optionList={aprendiz} ></Filtro>
            </div>
            
            <div className={`flex flex-col gap-4 sm:gap-6 sm:items-end md:items-end lg:gap-6 lg:items-end xl:items-end xl:gap-6 2xl:items-end 2xl:gap-6 `}>
                <Card verde3 h1='Nota final' h2='3,6' p='Essa nota é calculada com base nos critérios dos instrutores.' />
                <Card verde1 h1='Instrutor' h2='Semestres anteriores' p='Acompanhar o desempenho em diferentes semestres' />
                <Card verde2 h1='Aprendiz' h2='Auto avaliação do aprendiz' p='Acompanhar a nota em cada critério do aprendiz' />

            </div>
        </div>
    )
}

export default Feedback
