import React from 'react'
import footer_azul from "../Imgs/a_footer.png"
import footer_verde from "../Imgs/v_footer.png"
import footer_ciano from "../Imgs/c_footer.png"


function Footer({ azul, azul_aprendiz, verde, ciano }) {
    //FUNÇÃO PARA TROCAR A IMAGEM DO FOOTER DE ACORDO COM O ACESSO 
    
    const cores = `
    ${azul ? { footer_azul } : ''}
    ${azul_aprendiz ? { footer_azul } : ''}
    ${verde ? { footer_verde } : ''}
    ${ciano ? { footer_ciano } : ''}`;

    const footer = 'azul'

    switch (footer) {

        case 'azul':
            return (
                <img src={footer_azul} className={`w-full`}></img>
            )

        case 'azul_aprendiz':
            return (
                <img src={footer_azul} className={`w-full`}></img>
            )

        case 'verde':
            return (
                <img src={footer_verde} className={`w-full`}></img>
            )

        case 'ciano':
            return (
                <img src={footer_ciano} className={`w-full`}></img>
            )

        default:
            return(
                <></>
            )
    }

}

export default Footer
