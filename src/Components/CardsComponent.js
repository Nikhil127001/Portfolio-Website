import React from 'react'

const CardsComponent = (props) => {
    const {Color} = props;
    return (
        <div className='container ' >
            <div className='row'>
            <div class="card  mb-3 mx-5"  style={{ maxWidth: "18rem", fontFamily: "'Fugaz One', cursive",border: "1px solid #ff6b08", backgroundColor:`${Color=="dark"?"black":"white"}`}}>
                <div class="card-body" style={{color: `${Color=="dark"?"#ff6b08":"black"}`}}>
                    <h3 class="card-title">Dark card title</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card  mb-3 mx-5"  style={{ maxWidth: "18rem", fontFamily: "'Fugaz One', cursive",border: "1px solid #ff6b08", backgroundColor:`${Color=="dark"?"black":"white"}`}}>
                <div class="card-body" style={{color: `${Color=="dark"?"#ff6b08":"black"}`}}>
                    <h3 class="card-title">Dark card title</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card  mb-3 mx-5"  style={{ maxWidth: "18rem", fontFamily: "'Fugaz One', cursive",border: "1px solid #ff6b08", backgroundColor:`${Color=="dark"?"black":"white"}`}}>
                <div class="card-body" style={{color: `${Color=="dark"?"#ff6b08":"black"}`}}>
                    <h3 class="card-title">Dark card title</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card  mb-3 mx-5"  style={{ maxWidth: "18rem", fontFamily: "'Fugaz One', cursive",border: "1px solid #ff6b08", backgroundColor:`${Color=="dark"?"black":"white"}`}}>
                <div class="card-body" style={{color: `${Color=="dark"?"#ff6b08":"black"}`}}>
                    <h3 class="card-title">Dark card title</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
           
          
            </div>
        </div>
    )
}

export default CardsComponent