import React, { useState } from 'react'

const Tooltip = ({text,children}) => {
    const[show,setShow] = useState(false);
  return (
    <div 
    onMouseEnter={()=>setShow(true)}
    onMouseLeave={()=>setShow(false)}
   className='tooltip'
    >
    
   {
    show &&(
        <h2 className='tooltiptext'>
            {text}
        </h2>
    )
   }
   {children}

    </div>
  )
}

export default Tooltip