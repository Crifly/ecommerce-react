import React, { Children } from 'react'



export const TextError = (props:any) => {
return(
    <> 
        <div style={{color:'red',fontSize:'12px'}} >
            {props.children}
        </div>
    </>
)
}