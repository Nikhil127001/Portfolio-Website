import React from 'react'

const ContactPageComponent = (props) => {
  const { Color } = props;
  return (
    <div class=" text-center mt-4 p-4">
      <div style={{ textAlign: "left", fontFamily: "'Fugaz One', cursive", fontSize: "40px", color: "#1CBE8E" }}>Contact Me</div>
      <p className='' style={{ textAlign: "left", color: `${Color === "dark" ? "white" : "black"}` }}><b>I'm interested in internship as well as  full time job opportunity. However, if you have other offers then feel free to fill the contact form below</b></p>
      <div class="row   text-light " >
        <div class="col " ><input class=" form-control text-light   textbox1" style={{ height: "60px", backgroundColor: `${Color === "dark" ? "#011e31" : "white"}` }} type="text" placeholder="Name" aria-label=".form-control-lg example" /></div>
        <div class="col " ><input class="form-control text-light  textbox2" style={{ height: "60px", backgroundColor: `${Color === "dark" ? "#011e31" : "white"}` }} type="text" placeholder="Email" aria-label=".form-control-lg example" /></div>
      </div>

      <div class="row mt-2 " ><input class="form-control text-light" style={{ height: "60px", backgroundColor: `${Color === "dark" ? "#011e31" : "white"}` }} type="text" placeholder="Subject" aria-label=".form-control-lg example" /></div>

      <div class="row mt-2">
        <textarea class="form-control" style={{ height: "200px", backgroundColor: `${Color === "dark" ? "#011e31" : "white"}`, color: `${Color === "dark" ? "white" : "black"}` }} placeholder="Message" id="floatingTextarea"></textarea>
        <label for="floatingTextarea" />
        <button type="button" style={{ border: `2px solid #1CBE8E `, color: "#1CBE8E" }} class="btn btn-outline-secondary mb-3 mx-2">Send Message!</button>
      </div>
      <div className='mt-3' style={{height: "20px"}}>
        <a  href="https://www.linkedin.com/in/nikhil-prajapati-126257256/"><i  class="fa-brands fa-linkedin fa-2xl mx-2"></i></a>
        <a href="https://github.com/Nikhil127001?tab=overview"> <i class="fa-brands fa-square-github fa-2xl mx-2"></i> </a>
        <a class="button" href="mailto:prajapatinikhil166@gmail.com"><i class="fa-solid fa-square-envelope fa-2xl mx-2"></i></a>

      </div>
    </div>

  )
}

export default ContactPageComponent