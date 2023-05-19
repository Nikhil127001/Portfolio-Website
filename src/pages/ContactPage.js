import React from 'react'
import ContactPageComponent from '../Components/ContactPageComponent'
import MapsComponent from '../Components/MapsComponent'

const ContactPage = (props) => {
  const {Color} = props;
  return (
    <div class="row mt-4 contact " style={{marginLeft:"0px", marginRight:"0px"}}>
      <div class="col-sm-6  mb-3 mb-sm-0">
        <div class="card" style={{ backgroundColor: `${Color === "dark"?"#011e31": "white"}`, marginTop: "40px" }}>
          <div class="card-body ">
            <ContactPageComponent Color = {Color}/>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card " style={{ backgroundColor: "#011e31", marginTop: "40px" }}>
          <div class="card-body">
            <MapsComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
