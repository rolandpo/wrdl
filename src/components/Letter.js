import React, { useEffect } from 'react';
import './App.css'

export function Letter({value, color}) {
    return(
        <div className='letter-container' style={{backgroundColor: color}}>
            {value.toUpperCase()}
        </div>
    )
}