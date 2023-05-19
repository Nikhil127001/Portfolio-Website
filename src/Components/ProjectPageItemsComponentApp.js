import React from 'react'

const ProjectPageItemsComponentApp = (props) => {
  const {Color} = props;
  return (
    <>
   <div className='row mt-4 container-fluid '>
      <div className='col ' style={{ height: "500px", width: "100%", overflow: "scroll" }} id='scroll' >
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" >

        <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src={`${Color==="dark"?"images/user/OrangeChilli/OCR 0D.png":"images/user/OrangeChilli/OCR 0.png"}`} style={{ maxWidth: "100%" }}></img></div>
          <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src={`${Color==="dark"?"images/user/OrangeChilli/OCR 1D.png":"images/user/OrangeChilli/ORC 1.png"}`} style={{ maxWidth: "100%" }}></img></div>

          <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src={`${Color==="dark"?"images/user/OrangeChilli/OCR 2D.png":"images/user/OrangeChilli/OCR 2.png"}`} style={{ maxWidth: "100%" }}></img></div>
        </div>
      </div>


      <div className='col ms-5' style={{color: `${Color==="dark"?"white":"black"}`}}>
        <h1>Orange Chilli Restro</h1>
        <p class="font-monospace"><b>Skills :</b> MERN, HTML, CSS, JS, Bootstrap, etc.</p>
        <p>
        <b>Frontend :</b> <u><b>In My Balcony</b></u> is an end to end, ready to use web application with both user and
          admin panel.
          <p>Admin panel includes, admin chat bot component created using web socket used to make one
            to one interaction between admin and user, real time analytics charts using recharts library, CRUD operations on Products and users.</p>
            <b>Backend :</b> Node JS , mongoose and Express were used to create backend
          server, connected to frontend using axios library.</p>
        <div className='row ms-1'><b>URL :</b> <a href='https://drive.google.com/file/d/1gGLacLxeB8gG7CctOr1TUfnumji9FSvB/view?usp=sharing ' target='_blank' rel="noreferrer">Download Apk here</a></div>
        <div className='row ms-1 mt-5'><img alt="nothing to preview" className='fluid' src='images/QR/OCR QR.png' style={{height:"150px", width:"150px"}}></img></div>
        <h3>Download Apk</h3>
      </div>

    </div>
    <hr style={{border: "1px solid red"}}/>
    <div className='row mt-4 container-fluid '>
      <div className='col ' style={{ height: "500px", width: "100%", overflow: "scroll" }} id='scroll' >
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" >

        <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src="images/user/TaazaKhabar/TK 1.png" style={{ maxWidth: "100%" }}></img></div>
        <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src="images/user/TaazaKhabar/TK 2.png" style={{ maxWidth: "100%" }}></img></div>
        <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src="images/user/TaazaKhabar/TK 3.png" style={{ maxWidth: "100%" }}></img></div>
          
        </div>
      </div>


      <div className='col ms-5' style={{color: `${Color==="dark"?"white":"black"}`}}>
        <h1>In My Balcony</h1>
        <p class="font-monospace"><b>Skills :</b> MERN, HTML, CSS, JS, Redux, Bootstrap, etc.</p>
        <p>
        <b>Frontend :</b> <u><b>In My Balcony</b></u> is an end to end, ready to use web application with both user and
          admin panel.
          <p>Admin panel includes, admin chat bot component created using web socket used to make one
            to one interaction between admin and user, real time analytics charts using recharts library, CRUD operations on Products and users.</p>
            <b>Backend :</b> Node JS , mongoose and Express were used to create backend
          server, connected to frontend using axios library.</p>
        <div className='row ms-1'><b>URL :</b> <a href='https://frontend-no2m.onrender.com/ ' target='_blank' rel="noreferrer">https://frontend-no2m.onrender.com/</a></div>
        <div className='row ms-1 mt-5'><img alt="nothing to preview" className='fluid' src='images/QR/QRInMyBalcony.png' style={{height:"150px", width:"150px"}}></img></div>
        <h3>scan QR to open website</h3>
      </div>

    </div>
    <hr style={{border: "1px solid red"}}/>
    <div className='row mt-4 container-fluid '>
      <div className='col ' style={{ height: "500px", width: "100%", overflow: "scroll" }} id='scroll' >
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" >

        <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src={`${Color==="dark"?"images/user/OrangeChilli/OCR 0D.png":"images/user/OrangeChilli/OCR 0.png"}`} style={{ maxWidth: "100%" }}></img></div>
          <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src={`${Color==="dark"?"images/user/OrangeChilli/OCR 1D.png":"images/user/OrangeChilli/ORC 1.png"}`} style={{ maxWidth: "100%" }}></img></div>

          <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src={`${Color==="dark"?"images/user/OrangeChilli/OCR 2D.png":"images/user/OrangeChilli/OCR 2.png"}`} style={{ maxWidth: "100%" }}></img></div>
        </div>
      </div>


      <div className='col ms-5' style={{color: `${Color==="dark"?"white":"black"}`}}>
        <h1>In My Balcony</h1>
        <p class="font-monospace"><b>Skills :</b> MERN, HTML, CSS, JS, Redux, Bootstrap, etc.</p>
        <p>
        <b>Frontend :</b> <u><b>In My Balcony</b></u> is an end to end, ready to use web application with both user and
          admin panel.
          <p>Admin panel includes, admin chat bot component created using web socket used to make one
            to one interaction between admin and user, real time analytics charts using recharts library, CRUD operations on Products and users.</p>
            <b>Backend :</b> Node JS , mongoose and Express were used to create backend
          server, connected to frontend using axios library.</p>
        <div className='row ms-1'><b>URL :</b> <a href='https://frontend-no2m.onrender.com/ ' target='_blank' rel="noreferrer">https://frontend-no2m.onrender.com/</a></div>
        <div className='row ms-1 mt-5'><img alt="nothing to preview" className='fluid' src='images/QR/QRInMyBalcony.png' style={{height:"150px", width:"150px"}}></img></div>
        <h3>scan QR to open website</h3>
      </div>

    </div>
    <hr style={{border: "1px solid red"}}/>
    
    
   
  </>
  )
}

export default ProjectPageItemsComponentApp