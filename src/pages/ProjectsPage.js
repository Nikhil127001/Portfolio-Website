import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectsPage = (props) => {
  const {Color} = props;
  return (

    <div class="row mt-4">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card" style={{backgroundColor: "#011e31", marginTop: "40px"}}>
        <div class="card-body ">
        <Link to={"/projectItemsWeb"}><img src={`${Color === "light" ? "/images/Website.jpg": "/images/WebsiteDark.jpg"}`} class="img-fluid" alt="'Nothing to Preview'"/></Link>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card " style={{backgroundColor: "#011e31", marginTop: "40px"}}>
        <div class="card-body">
          <Link to={"/projectItemsApp"} >
        <img  src={`${Color === "light" ? "/images/Mobile.jpg": "/images/MobileDark.jpg"}`} class="img-fluid" alt="'Nothing to Preview'"/>
        </Link>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ProjectsPage