import { useState } from 'react'



function Button({onButtonClick,value}) {

    

   
    return (
       <>
             <div className='button'>
                <button value={value} onClick={onButtonClick}>{value}</button>
            </div>
            
       </>
    )
}

export default Button
