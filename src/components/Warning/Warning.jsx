import React from 'react'
import './Warning.css'

export const Warning = ({onConfirm, onCancel}) => {

  return (
    <div className='warningdiv'>
        <p className='warningP'>El contenido de esta galería puede ser desagradable para algunas personas, ¿desea continuar?</p>
        <div className='answers'>
        <button 
        onClick={onConfirm}
        className='si' >SI</button>

        <button 
        onClick={onCancel}
        className='no'>NO</button>
        </div>
    </div>
  )
}
