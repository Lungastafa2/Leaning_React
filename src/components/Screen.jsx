import { useState } from 'react'
import handleClick from './Button'




function Screen(number) {
    
  
    return (
        <div id="screen">
                  <input type="text" placeholder={number.number} id="screen_input"   />
     </div>
    )
}

export default Screen