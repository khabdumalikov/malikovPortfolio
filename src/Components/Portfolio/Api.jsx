import React from 'react'
const Api = (url,FName) => {
  return (
    <div className='apii'>
      <img src={url}/>
      <h2>{FName}</h2>
    </div>
  )
}

export default Api