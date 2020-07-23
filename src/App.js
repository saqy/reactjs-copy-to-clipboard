
import React, { useState } from 'react';
import "./App.css";
import CopyToClipboard from "./components/CopyToClipboard";
function App() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="App">
        <div className="clipboard-container">
          <input type="text" onChange={(e)=>{setValue(e.target.value); setStatus(false)} } />
          <CopyToClipboard text='sdsdsdsdsd' onCopy={() => setStatus(true)}>
            <button> click to copy </button>
          </CopyToClipboard>
        </div>
        {status && <p style={{color:'red'}}> Copied!!!</p>}
        <textarea id="w3review" name="w3review" rows="4" cols="29"></textarea>
      </div>
    </>
  );
}

export default App;
