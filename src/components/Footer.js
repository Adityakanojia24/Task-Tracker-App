// import React from 'react'

const Footer = () => {
  return (
    <footer>
       <p
      style={{
        margin:' 10px auto',
      
        fontSize: '15px',
        color: 'white',
        // border: '1px solid #86c232'
      }}>Preferably open in Google  chrome</p>
      <p
       style={{
        fontSize: '15px',
        color: 'white'
      }}>Copyright &copy;2022</p>

      <a style={{
        fontSize: '15px',
        color: 'white',
        // backgroundColor: '#86c232'

      }}
      href ="/about">About</a>
     

      <h1
      style={{
        // width:'200px', height:'60px',
        // marginLeft: '1rem',
        fontSize: '20px',
        fontfamily: 'Times New Roman (serif)' ,
        padding: '15px',
        // backgroundColor: 'salmon',
        color: '#86c232',
      }}
      >Developed by Aditya Kumar Kanojia</h1>

<a 
style={{
  margin:' 50px auto',

  fontSize: '15px',
  color: 'white',
  // border: '1px solid #86c232'
}}
href="mailto:xyz@abc.com">Mail me  for suggestions and feedback </a>
    </footer>
  )
}

export default Footer
