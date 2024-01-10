import './CSS/CalculadoraCSS.css';
import { useState } from 'react';
import Button from './Components/Button';
import * as math from 'mathjs';

function Calculadora() {
  const[result, resultState] = useState('0') //result guarda la cadena con la que se va a realizar la operación.
  const[flagSymbol, flagState] = useState(false) //flagSymbol guarda un booleano para saber si se ha pulsado un símbolo.

  const handleButtonClick = (boton) =>{
    console.log(result)
    const resultSave = result.slice(0, result.length-1); //Guarda la cadena sin el símbolo escrito para que si se pulsa un + pero se quiere cambiar a otro símbolo, se pueda reemplazar con facilidad. 
    if(['+','-','*','/','%'].some(symbol => boton.includes(symbol))){
      if(!flagSymbol){
        resultState(result + boton)
        flagState(true)
      } else{
        resultState(resultSave + boton)
      }
    } else{
      resultState(result === '0' && boton != '+' && boton != '-' && boton != '*' && boton != '/' && boton != '%' && boton != '.' ? boton : result + boton) //Comprobaciones para saber si lo que estamos pulsando primero es un número o un símbolo.  Al pulsar un número, el 0 se reemplazaría por el número pulsado, si pulsamos un símbolo, se le añadirá al 0.
      flagState(false)
    }
  }

  const handleButtonBorrarTodo = (result) =>{
    resultState('0')
  }

  const handleButtonBorrar = (result) =>{
  let nBorrado = result.substring(0,result.length-1)
  if(nBorrado === ''){nBorrado = '0'}
  resultState(nBorrado)
  }

  const resultado = (result) =>{
    try{
      const operacion = math.evaluate(result)
      const transformCadena = operacion.toString()
      resultState(transformCadena)
     } catch(error){
     }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='calculadora'>
          <div className='pantallaResultado'><h2 className='textoResultado'>{result}</h2></div>
          <div className='botones'>
          <Button className = {"grid-item"} onClick={() => handleButtonBorrar(result)} boton = {'C'}></Button>
          <Button className = {"grid-item"} onClick={() => handleButtonBorrarTodo(result)} boton = {'CE'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'%'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'/'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'7'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'8'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'9'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'*'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'4'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'5'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'6'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'-'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'1'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'2'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'3'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'+'}></Button>
          <Button className = {"boton-ampliado"} onClick ={handleButtonClick} boton = {'0'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} boton = {'.'}></Button>
          <Button className = {"grid-item"} onClick ={() => resultado(result)} boton = {'='}></Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Calculadora;
