import React from 'react'

function Button({read}) {
  return (
    <div>
      <button className='btn1 btn btn-danger'>
        {read}
      </button>
    </div>
  )
}

export default Button
