import { useState } from 'react'
import './App.css'
import Screen from './components/Screen'
import ButtonRow from './components/ButtonRow'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const [number,setNumber] = useState(7)q
  

  return (
    <>
      <div className="container">
        <div id="small_containter">
              
            <Screen number = {number}/>
            
            <div className="btn-container">

              <Button sign = '(' />
              
              
              
               <Button sign = ')'/> <Button sign = 'Del'/>  <Button sign = 'Ac'/>



              <Button sign = '7' />
              
              
              
              <Button sign = '8'/> <Button sign = '9'/>  <Button sign = '+'/>
              <Button sign = '4'/> <Button sign = '5'/> <Button sign = '6'/> <Button sign = '-'/>
              <Button sign = '1'/> <Button sign = '2'/> <Button sign = '3'/> <Button sign = 'x'/>
              <Button sign = '0'/> <Button sign = '.'/> <Button sign = '/'/> <Button sign = '='/>

               
              </div>
      </div>
    </div>
    </>
  )
}

export default App




