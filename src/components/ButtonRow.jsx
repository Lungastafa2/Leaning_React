import { useState } from 'react'
import Button from './Button'
import handleClick from './Button'



function ButtonRow(props) {
    
  
    return (
       <>
             <div className='button-row'>
                <Button value = {props.rowA} />
                <Button value = {props.rowB} />
                <Button value = {props.rowC} />
                <Button value = {props.rowD} />
               
              </div>
       
       </>
    )
}

export default ButtonRow