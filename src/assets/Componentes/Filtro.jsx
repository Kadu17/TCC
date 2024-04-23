import React from 'react'

function Filtro(props) { // INPUT DE FILTRO COM BORDA AZUL 
    
    return (
        <div>
            <label for="price" className="block text-sm font-medium leading-6 mb-2 text-gray-900">{props.label}</label>
            <select value={props.value} onChange={props.onChange} class="block w-80  py-1.5 pl-2  text-black ring-1  ring-indigo-400 sm:text-sm" >
                {props.optionList.map((val) => (
                    <>
                        <option>{val}</option>
                    </>
                ))}
            </select>
        </div>
    )
}

export default Filtro


