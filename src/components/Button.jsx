import { useState } from 'react'



function Button(props) {

   
    return (
       <>
             <div className='button'>
                <button >{props.sign} </button>
              </div>
       
       </>
    )
}

export default Button
