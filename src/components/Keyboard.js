import React from "react";


function Keyboard(){
  const Keyboard = window.SimpleKeyboard.default;

  const myKeyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button)
  });

  function onChange(input) {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  }

  function onKeyPress(button) {
    console.log("Button pressed", button);
  }
  return (
    <React.Fragment>
      <html>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css"/>
        </head>

        <body>
          <input class="input" placeholder="Tap on the virtual keyboard to start" />
          <div class="simple-keyboard"></div>

          <script src="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.js"></script>
          <script src="src/index.js"></script>
        </body>
      </html>
    </React.Fragment>
  );
}

export default Keyboard;