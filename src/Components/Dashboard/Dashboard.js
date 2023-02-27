import React from 'react'
import Button from 'react-bootstrap/Button';
import CustomNavbar from './CustomNavbar';
import Input from './Input'

function Dashboard({setUser}) {
  return (
    <>
    <CustomNavbar setUser={setUser}/> 
    <Input/>
    </>
  )
}

export default Dashboard