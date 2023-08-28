import React from 'react'

const ProjectPageItemsComponentWeb = (props) => {
  const {Color} = props;
  return (<>
    <div className='row mt-4 container-fluid '>
      <div className='col ' style={{ height: "500px", width: "100%", overflow: "scroll" }} id='scroll' >
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" >

          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/InMyBalcony/user1.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/InMyBalcony/user2.png' style={{ maxWidth: "100%" }} ></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/InMyBalcony/user3.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/InMyBalcony/user4.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/admin/InMyBalcony/admin1.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/admin/InMyBalcony/admin2.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/admin/InMyBalcony/admin3.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/admin/InMyBalcony/admin4.png' style={{ maxWidth: "100%" }}></img></div>
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

          <div className='row' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/NoteMaker/NoteMaker 0.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/NoteMaker/NoteMaker 1.png' style={{ maxWidth: "100%" }}></img></div>
          <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/NoteMaker/NoteMaker 2.png' style={{ maxWidth: "100%" }}></img></div>
        <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/NoteMaker/NoteMaker 3.png' style={{ maxWidth: "100%" }}></img></div>
        <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src='images/user/NoteMaker/NoteMaker 4.png' style={{ maxWidth: "100%" }}></img></div>
        </div>
      </div>


      <div className='col ms-5' style={{color: `${Color==="dark"?"white":"black"}`}}>
        <h1>NoteMaker</h1>
        <p class="font-monospace"><b>Skills :</b> MERN, HTML, CSS, JS, Context API, Bootstrap, etc.</p>
        <p>
        <b>Frontend :</b> <u><b>NoteWave</b></u> is a website on which you can save your notes for future references. I was created its Home,Login & Signup pages using bootstrap </p>
        <p>  <b>Backend :</b> Node JS , mongoose and Express were used to create backend
          server. I have also implemented authentication, so that notes will visible to  only that person from which they belongs when logged in</p>
          
        <div className='row ms-1'><b>URL :</b> <a href='https://calm-ruby-basket-clam-gown.cyclic.cloud/' target='_blank' rel="noreferrer">https://calm-ruby-basket-clam-gown.cyclic.cloud/</a></div>
        <div className='row ms-1 mt-5'><img alt="nothing to preview" className='fluid' src='images/QR/QRNoteMaker.png' style={{height:"150px", width:"150px"}}></img></div>
        <h3>scan QR to open website</h3>
      </div>

    </div>
    <hr style={{border: "1px solid red"}}/>
    <div className='row mt-4 container-fluid '>
      <div className='col ' style={{ height: "500px", width: "100%", overflow: "scroll" }} id='scroll' >
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" >

        <div className='row ' id="scrollspyHeading2"><img alt="nothing to preview" src="images/user/TaazaKhabar/TK 1.png" style={{ maxWidth: "100%" }}></img></div>
        <div></div>
        <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src="images/user/TaazaKhabar/TK 2.png" style={{ maxWidth: "100%" }}></img></div>
        <div className='row mt-2' id="scrollspyHeading2"><img alt="nothing to preview" src="images/user/TaazaKhabar/TK 3.png" style={{ maxWidth: "100%" }}></img></div>
          
        </div>
      </div>


      <div className='col ms-5' style={{color: `${Color==="dark"?"white":"black"}`}}>
        <h1>Taaza Khabar</h1>
        <p class="font-monospace"><b>Skills :</b>  JS, react, Bootstrap, etc.</p>
        <p>
        <b>Frontend :</b> <u><b>Taaza Khabar </b></u> is a News Website, which is able to display news in different catagories like- Sports, Technology, Science, Entertainment etc. pagination is also used to display news if the catagory has multiple pages to show.
           </p>
           <p>
            <b>Backend :</b> News API is used in the backend to fetch news in different catagories</p>
        <div className='row ms-1'><b>URL :</b> 
        {/* <a href='https://frontend-no2m.onrender.com/ ' target='_blank' rel="noreferrer">https://frontend-no2m.onrender.com/</a> */}
        yet to deploy
        </div>
        {/* <div className='row ms-1 mt-5'><img alt="nothing to preview" className='fluid' src='images/QR/QRInMyBalcony.png' style={{height:"150px", width:"150px"}}></img></div>
        <h3>scan QR to open website</h3> */}
      </div>

    </div>
    
   
  </>
  )
}

export default ProjectPageItemsComponentWeb
