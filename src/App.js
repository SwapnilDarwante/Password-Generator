import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [Lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbols,setSymbols]=useState(false)
  let [passwordLen,setPasswordLen]=useState(10)
  let [fPass,setfPass]=useState('')
  let generatePassword=()=>{
    let charSet = ''
    let finalPass=''
    if(uppercase || Lowercase || number || symbols){
      if(uppercase) charSet+= UC
      if(Lowercase) charSet+= LC
      if(number) charSet+= NC
      if(symbols) charSet+= SC
      for(let i=0;i<passwordLen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      
      }
        setfPass(finalPass)
    }
    else{
      alert("Please select one CheckBox.")
    }

  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }
  return (
    <>
    <div className="Background">
      <div className="passwordBox">
        <h2>PASSWORD GENERATOR</h2>
        <div className="passwordBoxIn">
          <input type="text" value={fPass}readOnly />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <label>Password Length</label>
          <input type="number" max={20} min={10} value={passwordLen}
          onChange={(event)=>setPasswordLen(event.target.value)}
          />
        </div>
        <div className="passLength">
          <label>Include Uppercase Letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>
        <div className="passLength">
          <label>Include Lowercase Letters</label>
          <input type="checkbox" checked={Lowercase} onChange={()=>setLowercase(!Lowercase)}/>
        </div>
        <div className="passLength">
          <label>Include Numbers</label>
          <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
        </div>
        <div className="passLength">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>
        <button className="btn" onClick={generatePassword}> Generate Password</button>
      </div>
      </div>
    </>
  );
}

export default App;
