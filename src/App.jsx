import { useState } from 'react'
import './App.css'
// import Screen from './components/Screen'
// import Button from './components/Button'




function App() {
  const [count, setNumber] = useState('')




  return (
    <>
         <div className="container">
      <div id="small_containter">
        <div id="screen">
          
          <input type="text" placeholder="0" id="screen_input" value={count} />
        </div>

        <div className="btn-container">
          
          <button onClick={(e) => setNumber(count + '(')}>(</button>
          <button onClick={() => setNumber(count + ')')}>)</button>
          <button onClick={() => setNumber(count.toString().slice(0,-1))}>Del </button> 
          <button onClick={() => setNumber("")}>AC</button>

          <button onClick={() => setNumber(count + '7')}>7</button>
          <button onClick={() => setNumber(count + '8')}>8</button>
          <button onClick={() => setNumber(count + '9')}>9</button>
          <button onClick={() => setNumber(count + '+')}>+</button>


          <button onClick={() => setNumber(count + '4')}>4</button>
          <button onClick={() => setNumber(count + '5')}>5</button>
          <button onClick={() => setNumber(count + '6')}>6</button>
          <button oncCick={() => setNumber(count + '-')}>-</button>
          
          <button onClick={() => setNumber(count + '1')}>1</button>
          <button onClick={() => setNumber(count + '2')}>2</button>
          <button onClick={() => setNumber(count + '3')}>3</button>
          <button onClick={() => setNumber(count + '*')}>x</button>


          <button onClick={() => setNumber(count + '0')}>0</button>
          <button onClick={() => setNumber(count + '.')}>.</button>
          <button onClick={() => setNumber(count + '/')}>÷</button>
          <button onClick={() => setNumber(eval(count))}>=</button>
          
          
        </div>
      </div>
    </div>

    
    </>
  )
}
  export default App








