import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Components/Button';
import * as math from 'mathjs';

function Calculadora() {
  const[result, resultState] = useState('0')
  const[total, totalState] = useState('0')
  const[anterior, anteriorState] = useState('0')

  const handleButtonClick = (numero) =>{
    resultState(result === '0' && numero != '+' && numero != '-' && numero != '*' && numero != '/' && numero != '%'  ? numero : result + numero) 
  }

  const handleButtonBorrar = () =>{
    resultState('0')
  }

  const resultado = (result) =>{
    resultState(math.evaluate(result))
  }

  const cambiarSigno = (result) =>{
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='calculadora'>
          <div className='pantallaResultado'><h2 className='black'>{result}</h2></div>
          <div className='botones'>
          <Button className = {"grid-item"} onClick={handleButtonBorrar} numero = {'C'}></Button>
          <Button className = {"grid-item"} onClick={cambiarSigno} numero = {'+/-'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'%'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'/'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'7'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'8'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'9'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'*'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'4'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'5'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'6'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'-'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'1'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'2'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'3'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'+'}></Button>
          <Button className = {"boton-ampliado"} onClick ={handleButtonClick} numero = {'0'}></Button>
          <Button className = {"grid-item"} onClick ={handleButtonClick} numero = {'.'}></Button>
          <Button className = {"grid-item"} onClick ={() => resultado(result)} numero = {'='}></Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Calculadora;
