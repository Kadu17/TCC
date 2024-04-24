import React from 'react'


function Botaoroxo(props) { //BOTAO COM PREENCHIMENTO ROXO
  return (
    <div>
      <button onClick={props.onClick} className={`h-12 w-32 sm:w-24 sm:h-8 lg:h-12 lg:w-32 text-white bg-roxo`}>{props.txt}</button>
    </div>
  )
}

export default Botaoroxo
