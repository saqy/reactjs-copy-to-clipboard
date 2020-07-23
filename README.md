# reactjs-copy-to-clipboard
adds support for copy to clipboard for reactjs project. 
![node-emoji example](https://i.imgur.com/1g3zPvy.gif)

## Installation
To install `reactjs-copy-to-clipboard`, you need [node.js](http://nodejs.org/) and [npm](https://github.com/npm/npm#super-easy-install).

In your project directory, just run
```sh
npm i reactjs-copy-to-clipboard
```

## Usage
Can be used in reactjs projects like below
```js
import React, {useState} from 'react';
import CopyToClipboard from "reactjs-copy-to-clipboard";
function App() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(false);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          setStatus(false);
        }}
      />
      <CopyToClipboard text={value} onCopy={() => setStatus(true)}>
        <button> click to copy </button>
      </CopyToClipboard>

      {status && <p style={{ color: "red" }}> Copied!!!</p>}
      <textarea id="w3review" name="w3review" rows="4" cols="29"></textarea>
    </>
  );
}
```
## Minimal Usage
Just import it and render it like below
```js
import CopyToClipboard from "reactjs-copy-to-clipboard";
 
      <CopyToClipboard text="text you want to copy" 
         onCopy={() => console.log('text is copied')}>
            <button> click to copy </button>
      </CopyToClipboard>

 
}
```


## License
MIT


