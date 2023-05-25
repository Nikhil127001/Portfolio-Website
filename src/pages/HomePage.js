import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonComponent from "../Components/ButtonComponent";
import CardsComponent from "../Components/CardsComponent";
import SkillsComponent from "../Components/SkillsComponent";
const HomePage = (props) => {
    const { Color } = props
    return (
        <>
         <pre style={{fontWeight: "bold",border:"0px", fontSize: "20px" , fontFamily: "'Satisfy', cursive", backgroundColor: `${Color=="dark"?"black":"white"}`}}><h2>
            &lt; Intro &gt;</h2>
        </pre>
        <div className=" row container-fluid ">
            <div className="  mt-4 col  ">
                <p className={`fonts text-${Color === "light" ? "dark" : "light"}`} style={{ fontFamily: "'Fugaz One', cursive", marginLeft: "40px" }}><p><h1>Hii! I'm</h1></p>

                    <div className="gradient">Nikhil Prajapati</div><h3>I'm a Software Engineer</h3>
                    <h4>Extremely passionate for software development and problem Solving. Looking for topNotch opportunities, where I can implement my skills and take them to next level </h4></p>
                <p className=""></p>
            </div>


            <div className="md-6 col text-center ">
                <Image  src={`${Color === "dark"? "/images/profile2.png" : "/images/profile.png" }`} alt="no image to preview" style={{
                    height
                        : "550px", width: "400px"
                }} />
                <div className="text-center img-fluid ">
                    <button type="button" style={{ border: `2px solid ${Color === "dark" ? "white" : "black"} ` }} class="btn btn-outline-secondary mb-3 mt-4 fa-bounce mx-3"><a style={{textDecoration: "none", color:"grey"}} href="/Pdf/Nikhil's Resume.pdf" download><i class="fa-solid fa-download fa-bounce fa-xl"></i> Download Resume</a></button>
                    <ButtonComponent Color={Color} />
                </div>
                
            </div>
           
        </div>
        <pre style={{fontWeight: "bold",border:"0px", fontSize: "20px" , fontFamily: "'Satisfy', cursive", backgroundColor: `${Color=="dark"?"black":"white"}`}}>
            <h2>&lt;/ Intro &gt;</h2>
        </pre>
        <pre style={{fontWeight: "bold",border:"0px", fontSize: "20px" , fontFamily: "'Satisfy', cursive", backgroundColor: `${Color=="dark"?"black":"white"}`}}>
           <h2> &lt; Skills &gt;</h2>
        </pre>
        <SkillsComponent/>
        <pre style={{fontWeight: "bold",border:"0px", fontSize: "20px" , fontFamily: "'Satisfy', cursive", backgroundColor: `${Color=="dark"?"black":"white"}`}}>
           <h2> &lt;/ Skills &gt;</h2>
        </pre>
        {/* <pre style={{fontWeight: "bold",border:"0px", fontSize: "20px" , fontFamily: "'Satisfy', cursive", backgroundColor: `${Color=="dark"?"black":"white"}`}}>
        
        </pre>
        <h2> &lt; Github &gt;</h2>
       <CardsComponent Color = {Color}/>
        <pre style={{fontWeight: "bold",border:"0px", fontSize: "20px" , fontFamily: "'Satisfy', cursive", backgroundColor: `${Color=="dark"?"black":"white"}`}}>
           <h2> &lt;/ Github &gt;</h2>
        </pre> */}
        </>
    )


};

export default HomePage;