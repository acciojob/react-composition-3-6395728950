import React, { useState } from 'react'

const Tooltip = ({text,children}) => {
    const[show,setShow] = useState(false);
  return (
    <h2 
    onMouseEnter={()=>setShow(true)}
    onMouseLeave={()=>setShow(false)}
   className='tooltiptext'
    >
    
   {
    show &&(
        <div className='tooltip'>
            {text}
        </div>
    )
   }
   {children}

    </h2>
  )
}

export default Tooltip