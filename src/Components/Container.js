import React from 'react'
import NavbarM from './Navbar/NavbarM'
import { Route, Routes } from 'react-router-dom'
import { myRout } from './Directions'

const Container = () => {
  return (
    <div>
        <NavbarM/>
        <Routes>
          {
            myRout.map(user =>{
              return <Route path={user.path} element={user.element} key='' />
            })
          }
        </Routes>
    </div>
  )
}

export default Container