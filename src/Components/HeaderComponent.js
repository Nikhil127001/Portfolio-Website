import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../App.css'

const HeaderComponent = (props) => {
  const { change, Color } = props
  return (<>
   
    <Nav className={`  justify-content-center  Nikhilx`} activeKey="/home"  style={{backgroundColor: 'black'}}>
      <Nav.Item >
        <Link to="/" className={` px-2 mt-0 fst-italic Nav Hello text-${Color==="dark"?"light": "dark"}` } style={{fontWeight: "bolder" , fontSize:"25px"}}>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/projects"  className={` px-2 mt-0 fst-italic Nav Hello text-${Color==="light"?"dark": "light"}`}style={{fontWeight: "bolder" , fontSize:"25px"}}>Projects</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact"  className={` px-2 mt-0 fst-italic Nav Hello text-${Color==="light"?"dark": "light"}`}style={{fontWeight: "bolder" , fontSize:"25px"}}>Contact</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about"  className={` px-2 mt-0 fst-italic Nav Hello text-${Color==="light"?"dark": "light"}`}style={{fontWeight: "bolder" , fontSize:"25px"}}>
          About
        </Link>
      </Nav.Item>
      <Nav.Item >
        <Link to="/about"  className={` px-2 mt-0 fst-italic Nav Hello text-${Color==="light"?"dark": "light"}`}>
        </Link>

      </Nav.Item>
      <Nav.Item >
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={change} />
        <label className={`form-check-label  text-${Color==="dark"?"light": "dark"} `} for="flexSwitchCheckDefault" >Dark Mode</label>
      </div>
      </Nav.Item>
      <Nav.Item className='align-self-end'>
        <div className='mx-5'>
      <a  href="https://www.linkedin.com/in/nikhil-prajapati-126257256/"><i class="fa-brands fa-linkedin fa-lg mx-2"></i></a>
      <a  href="https://github.com/Nikhil127001?tab=overview"> <i class="fa-brands fa-square-github fa-lg mx-2"></i> </a>
      <a class="button" href="mailto:prajapatinikhil166@gmail.com"><i class="fa-solid fa-square-envelope fa-lg mx-2"></i></a>
      
      </div>
      </Nav.Item>
    </Nav>


  </>
  )
}

export default HeaderComponent