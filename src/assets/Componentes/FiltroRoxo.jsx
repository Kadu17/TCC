import React from 'react'

function FiltroRoxo(props) { //INPUT DE FILTRO COM BORDA ROXA 
    return (
        <div>
            <label for="price" className="block text-sm font-medium leading-6 mb-2 text-gray-900">{props.label}</label>
            <select value={props.value} onChange={props.onChange} class="block w-80 sm:w-52 sm:h-7 xl:w-80 xl:h-10  py-1.5 pl-2  text-black ring-1  ring-roxo sm:text-sm" >
                {props.optionList.map((val) => (
                    <>
                        <option>{val}</option>
                    </>
                ))}
            </select>
        </div>
    )
}

export default FiltroRoxo

