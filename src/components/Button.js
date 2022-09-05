const Button = ({color,text,onClick})=>{
    
    return(
        <button
        onClick={onClick}
        style={{
            marginTop: '1rem',
            marginLeft: '9rem',
            fontSize: '15px',
            padding: '15px',
            backgroundColor: 'Green',
            color: 'white',
          }}
    className= 'btn'>
        {text}
    </button>
    
 )
}
export default Button