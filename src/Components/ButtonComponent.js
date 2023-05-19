import React from 'react'
import { Link } from 'react-router-dom';

const ButtonComponent = (props) => {
    const {Color, name} = props;
  return (
    
    <button type="button" style={{ border: `2px solid ${Color === "dark" ? "white" : "black"} ` }} class="btn btn-outline-secondary mb-3 mt-4 "><Link style={{textDecoration: "none", color:"grey"}} to='/contact' download>Contact Me</Link></button>
  )
}

export default ButtonComponent