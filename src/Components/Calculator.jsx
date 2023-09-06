import React, { useState } from 'react';
function Calculator() {
   const [result,setResult] = useState("");
   
   const handleClick = (event) => {
    setResult(result.concat(event.target.name))
   };
   const handleClear = () => {
    setResult("");
   };
   const handleBackSpace = () => {
    setResult(result.slice(0,result.length-1))
   };
   const calculate = () => {
    try{
        setResult(eval(result).toString())
    }catch(err){
        setResult("Error")
    }
   };
   return (
    <div className='container'>
        <form>
            <input type='text' value={result} className='text--bar'/>
        </form>
        <div className='keypad'>
        <button onClick={handleClear} className='button highlight' name='clear' id="clear">Clear</button>
        <button onClick={handleBackSpace} className='button highlight' name='backspace' id="backspace">C</button>
        <button onClick={handleClick} className='button highlight' name='/'>&divide;</button>
        <button onClick={handleClick} className='button' name='7'>7</button>
        <button onClick={handleClick} className='button' name='8'>8</button>
        <button onClick={handleClick} className='button' name='9'>9</button>
        <button onClick={handleClick} className='button highlight' name='*'>&times;</button>
        <button onClick={handleClick} className='button' name='4'>4</button>
        <button onClick={handleClick} className='button' name='5'>5</button>
        <button onClick={handleClick} className='button' name='6'>6</button>
        <button onClick={handleClick} className='button highlight' name='-'>&ndash;</button>
        <button onClick={handleClick} className='button' name='1'>1</button>
        <button onClick={handleClick} className='button' name='2'>2</button>
        <button onClick={handleClick} className='button' name='3'>3</button>
        <button onClick={handleClick} className='button highlight' name='+'>+</button>
        <button onClick={handleClick} className='button' name='0'>0</button>
        <button onClick={handleClick} className='button' name='.'>.</button>
        <button onClick={calculate} className='button highlight' name='=' id="result">=</button>
        </div>
    </div>
   )
}

export default Calculator;
