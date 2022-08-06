import { useEffect, useState } from 'react';
import './App.css';
import Icon from "./Icon.jsx"
function App() {
  let intro = "Hello, World".split("")
  let [text,setText] = useState("")
  useEffect(()=>{
    setTimeout(()=>{
      let tempText = text
      console.log(tempText)
       if(tempText.length!==intro.length){
        tempText +=intro[tempText.length]
         setText(tempText)
       }
     },500)
    },[text])
  return (
    <div className='app'>
      <div className='button'>
        <span className='wave' >👋
        </span>
      <h3>
       
          Get in touch
          
      </h3>

      </div>
     <h1>{text} <span className='typing' >|</span> </h1> 
      <h3 className='intro'>
      I'm Ibrahim
      </h3>
      <div className='icons'>
        {Icon({iconName:"twitter",className:"icon"})}
        {Icon({iconName:"linkedin",className:"icon"})}
        {Icon({iconName:"github",className:"icon"})}
      </div>
    </div>
  )
}

export default App;
