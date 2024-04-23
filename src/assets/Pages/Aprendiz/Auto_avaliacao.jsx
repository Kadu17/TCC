import React, {useState} from 'react'
import Filtro from '../../Componentes/Filtro'
import Botao from '../../Componentes/Botao'

 
function Auto_avaliacao() { //FUNÇÃO DA TELA DE AUTO AVALIAÇÃO DO ACESSO DE APRENDIZ
 
    let semestre = ['1° Semestre', '2° Semestre', '3° Semestre']
 
    const [semes, setSemes] = useState('')
 
    const visualizar = (e) => {
        console.log('semestre:', semes)
    }
   
    return (
        <div className={`flex flex-col h-full gap-4 mt-10 mx-10`}>
            <h1 className={`text-2xl font-bold`}>AUTO AVALIAÇÃO</h1>
            <p className={`text-base`}>Bem-vindo(a) a sua auto avaliação, leia cada critério atentamente e reflita sobre sua nota antes de submeter suas respostas. Abaixo você encontra a descrição de cada nota e  de cada critério. Além disso, todos os campos obrigatórios devem ser preenchidos.</p>
            <Filtro id="semestre" label='Selecione o semestre' optionList={semestre} value={semes} onChange={(e) => (setSemes(e.target.value))} ></Filtro>
            <div className={'flex justify-end'}>
               <a href='/Home_aprendiz'><Botao txt='FINALIZAR' onClick={visualizar}></Botao></a>
            </div>
        </div>
    )
}
 
export default Auto_avaliacao