// import React from 'react'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
  return (
    <div className ='header'>
      <h1 
       style={{
        width:'200px', height:'60px',
        marginLeft: '1rem',
        fontSize: '20px',
        padding: '15px',
        backgroundColor: 'salmon',
        color: 'black',
      }}>
    {title}</h1>
      <Button 
      
       color={showAdd ? 'red' :'green'}   
       text ={showAdd ? 'CLOSE' : 'ADD'}
      onClick={onAdd}/>
      
    </div>
  )
}
  
export default Header
