import { useState } from 'react'
import './App.css'
import Screen from './components/Screen'
import Button from './components/Button'
import ButtonRow from './ButtonRow'




function App() {
  const [count, setNumber] = useState("")

  const handleChildClick = (e) => {
    setNumber(count + e.target.value);
    
  };


  const handleDelClick = () => {
    setNumber(count.toString().slice(0,-1));
    
  };

  const handleClearClick = () => {
    setNumber("");
    
  };


  const handleSumClick = () => {
    setNumber(eval(count));
    
  };




  return (
    <>
         {/* <div className="container">
      <div id="small_containter">
     
        <div id="screen">
          <Screen value={count}/>
        </div>

        <div className="btn-container"> */}

          <ButtonRow culumnA = "("  culumnB = ")"  culumnC = "Del" culumnD = "AC" />
          
          
          {/* <Button onButtonClick={handleChildClick} value="("/>
          <Button onButtonClick={handleChildClick} value=")"/>
         
          <Button onButtonClick={handleDelClick} value="Del"/>
          <Button onButtonClick={handleClearClick} value="AC"/>
          

          
          <Button onButtonClick={handleChildClick} value="7"/>
          
          <Button onButtonClick={handleChildClick} value="8"/>
          
          <Button onButtonClick={handleChildClick} value="9"/>
          
          <Button onButtonClick={handleChildClick} value="+"/>
          
          
          



          
          <Button onButtonClick={handleChildClick} value="4"/>
          
          <Button onButtonClick={handleChildClick} value="5"/>
          
          <Button onButtonClick={handleChildClick} value="6"/>
          
          <Button onButtonClick={handleChildClick} value="-"/>
          
          
          <Button onButtonClick={handleChildClick} value="1"/>
          
          <Button onButtonClick={handleChildClick} value="2"/>
          
          <Button onButtonClick={handleChildClick} value="3"/>
          
          <Button onButtonClick={handleChildClick} value="*"/>


          
          <Button onButtonClick={handleChildClick} value="0"/>
         
          <Button onButtonClick={handleChildClick} value="."/>
          
          <Button onButtonClick={handleChildClick} value="/"/>
          
          <Button onButtonClick={handleSumClick} value="="/>
           */}
          
        {/* </div>
      </div>
    </div> */}

    
    </>
  )
}
  export default App