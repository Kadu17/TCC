import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './assets/Componentes/Header'
import Botao from './assets/Componentes/Botao'
import Footer from './assets/Componentes/Footer'
import HomeAdmin from './assets/Pages/Admin/HomeAdmin'
import HomeIns from './assets/Pages/Instrutor/HomeIns'
import Card from './assets/Componentes/Card'
import Cadastro_turma from './assets/Pages/Admin/Cadastro_turma'
import Input from './assets/Componentes/Input'
import Editar_turma from './assets/Pages/Admin/Editar_turma'
import Cadastro_aprendiz from './assets/Pages/Admin/Cadastro_aprendiz'
import Criterios from './assets/Pages/Admin/Criterios'
import Editar_criterio from './assets/Pages/Admin/Editar_criterio'
import Avaliacao from './assets/Pages/Instrutor/Avaliacao'
import Feedback from './assets/Pages/Instrutor/Feedback'
import Avaliacao_feedback from './assets/Pages/Instrutor/Avaliacao_feedback'
import Observacoes from './assets/Pages/Instrutor/Observacoes'
import Auto_avaliacao from './assets/Pages/Aprendiz/Auto_avaliacao'
import Home_aprendiz from './assets/Pages/Aprendiz/Home_aprendiz'
import Cadastro from './assets/Pages/Cadastro/Cadastro'
import Login from './assets/Pages/Cadastro/Login'
import RecuperarSenha from './assets/Pages/Cadastro/RecuperarSenha'
import NovaSenha from './assets/Pages/Cadastro/NovaSenha'
import Cadastro_de_Aprendiz from './assets/Pages/Cadastro/Cadastro_de_Aprendiz'
import CadastroGestor from './assets/Pages/Cadastro/CadastroGestor'
import Chart from './assets/Componentes/Chart'
import RendimentoAprendiz from './assets/Pages/Aprendiz/RendimentoAprendiz'
import RendimentoGestor from './assets/Pages/Gestor/RendimentoGestor'
import Home from './assets/Pages/Cadastro/Home'
import Email from './assets/Pages/Admin/Email'
import Upload from './assets/Pages/Admin/Upload'
import RendimentoInstrutor from './assets/Pages/Instrutor/Rendimento_instrutor'

function App() {
  let instrutor = false
  let aprendiz = false
  let gestor = false
  let admin = false
  let home = true


  return (
    <div className={'h-full'}>
      <Header instrutor={instrutor} aprendiz={aprendiz} gestor={gestor} admin={admin} home={home} />

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomeAdmin/>}></Route>


          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Cadastro' element={<Cadastro/>}></Route>
          <Route path='/Cadastro_de_Aprendiz' element={<Cadastro_de_Aprendiz/>}></Route>
          <Route path='/CadastroGestor' element={<CadastroGestor/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/RecuperarSenha' element={<RecuperarSenha/>}></Route>
          <Route path='/NovaSenha' element={<NovaSenha/>}></Route>

          <Route path='/HomeAdmin' element={<HomeAdmin/>}></Route>
          <Route path='/Cadastro_aprendiz' element={<Cadastro_aprendiz/>}></Route>
          <Route path='/Cadastro_turma' element={<Cadastro_turma/>}></Route>
          <Route path='/Criterios' element={<Criterios/>}></Route>
          <Route path='/Editar_criterio' element={<Editar_criterio/>}></Route>
          <Route path='/Editar_turma' element={<Editar_turma/>}></Route>
          <Route path='/Email' element={<Email/>} ></Route>
          <Route path='/Upload' element={<Upload/>} ></Route>

          <Route path='/Auto_avaliacao' element={<Auto_avaliacao/>}></Route>
          <Route path='/Home_aprendiz' element={<Home_aprendiz/>}></Route>
          <Route path='/RendimentoAprendiz' element={<RendimentoAprendiz/>}></Route>

          <Route path='/RendimentoInstrutor' element={<RendimentoInstrutor/>}></Route>

          <Route path='/RendimentoGestor' element={<RendimentoGestor/>}></Route>

          <Route path='/HomeIns' element={<HomeIns/>}></Route>
          <Route path='/Avaliacao' element={<Avaliacao/>}></Route>
          <Route path='/Avaliacao_feedback' element={<Avaliacao_feedback/>}></Route>
          <Route path='/Feedback' element={<Feedback/>}></Route>
          <Route path='/Observacoes' element={<Observacoes/>}></Route>
        </Routes>
      </BrowserRouter>


     

      <Footer ciano={instrutor} verde={gestor} azul={admin} azul_aprendiz={aprendiz} />
    </div>


  )
}

export default App
