import { useState } from 'react'
// import handleClick from './Button'




function Screen(number) {
    
  
    return (
        <div id="screen">
                   <input type="text" placeholder="0" id="screen_input" value={number.value} readOnly='readonly'/>
     </div>
    )
}

export default Screen