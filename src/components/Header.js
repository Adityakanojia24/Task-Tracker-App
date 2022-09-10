// import React from 'react'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
  return (
    <div className ='header'>
      <h1 
       style={{
        // width:'200px', 
        marginLeft: '1rem',
        fontSize: '60 px',
        padding: '10px',
        height:'60px',
        // backgroundColor: 'salmon',
        color: '#86c232',
        
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
