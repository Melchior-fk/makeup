import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col gap-4'>
        <input type="text" className='input' placeholder='Nom' />
        <input type="text" className='input' placeholder='Email' />
        <input type="text" className='input' placeholder='Télephone' />
        <textarea className='textarea mb-2' placeholder='Message'></textarea>
        <button type='submit' className='btn self-start'>Envoyez votre message</button>
    </form>
  )
}

export default Form