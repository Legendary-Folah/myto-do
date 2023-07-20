import React from 'react'

function Form() {
  return (
    <div>
        <form className='todoform'>
            <input className='input' placeholder='Add To-Dos...' />
            <button className='todobutton'>Add To-Do(s)</button>
        </form>
    </div>
  )
}

export default Form;