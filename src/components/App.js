
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
 
  return (
    <div>
         <Tooltip text="This is a tooltrip">
          <button>Hover over me</button>
         </Tooltip>

         <Tooltip text="This is another tooltrip">

          <button>Hover over me to see another tooltip</button>
         </Tooltip>
    </div>
  )
}

export default App
