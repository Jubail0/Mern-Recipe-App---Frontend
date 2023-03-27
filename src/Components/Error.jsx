import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
   
  return (
    <div>
        <h1>Error: {error?.response?.statusText}</h1>
        <span>status Code - {error?.response?.status}</span>
    
    </div>
  )
}

export default Error