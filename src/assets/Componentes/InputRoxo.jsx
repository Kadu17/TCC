import React from 'react'

function InputRoxo(props) { // INPUT COM BORDA ROXA
    return (
        <div>
            <label for="price" className="block text-sm font-medium leading-6 mb-2 text-gray-900">{props.label}</label>
            <input value={props.value} onChange={props.onChange} type="text" className="block w-80 sm:w-52 sm:h-7 xl:w-60 xl:h-12 py-1.5 pl-2 text-black ring-1  ring-roxo placeholder:text-black" placeholder="Insira um texto"/>
        </div>
    )
}

export default InputRoxo
