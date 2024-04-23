import React from 'react'
import Card from '../../Componentes/Card'
import { Link } from 'react-router-dom'
 
 
function HomeAdmin() { //TELA INICIAL DO ACESSO DE ADMINISTRADOR
 
  return (
    <div className={`flex flex-col w-full h-fit gap-20 sm:gap-5 md:gap-5`}>
      <div className={`mx-auto border-4 mt-4 w-full flex justify-evenly sm:gap-4 sm:items-center sm:flex-col md:gap-4 md:items-center md:flex-col lg:place-content-center`}>
        <Link to='/Cadastro_aprendiz'><Card azul1 h1='Administrador' h2='Aprendizes' p='Aceitar o cadastro de novos aprendizes no sistema.' /></Link>
        <Link to='/Criterios'><Card azul2 h1='Administrador' h2='Critérios' p='Cadastre, edite ou exclua um critério de avaliação de um curso.' /></Link>
        <Link to='/Email'> <Card azul3 h1='Administrador' h2='Email ' p='Edite os dados de usuário que envia o e-mail.' /></Link>
      </div>
      <div className={`mx-auto w-full flex justify-evenly sm:flex-col sm:items-center sm:gap-4 md:flex-col md:items-center md:gap-4 lg:flex-row`}>
        <Link to='/Cadastro_turma'> <Card azul3 h1='Administrador' h2='Turmas' p='Cadastre, edite ou exclua uma turma no sistema.' /></Link>
        <Link to='/Upload'><Card azul1 h1='Administrador' h2='Notas do Senai' p='Adicione as notas do SENAI dos aprendizes através do Excel.' /></Link>
      </div>
    </div>
  )
}
 
export default HomeAdmin