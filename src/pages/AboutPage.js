import React from 'react'

const AboutPage = (props) => {
  const {Color} = props
  return (
    <div className='container mt-5' style={{fontSize:"20px", color: `${Color==="dark"?"white":"black"}`}}><p>Hi there! My name is Nikhil kumar Prajapati, and I'm a Software engineer. I'm passionate about creating softwares and problem solving. I have solved 200 Questions on Data Structures and Algorithms in JAVA language. </p>
      <b>Background and Experience</b>
      <p></p>
      {/* <p>After your introduction, provide more details about your background and experience. This section should showcase your skills and highlight your achievements. You can include information such as your education, professional experience, and certifications.</p> */}


      <p>
       
        I have completed my bachelors of science in physical science with electronics.from here I got very much interest in technology.Then I got addmission in Btech through Lateral entry.
        Currently I'm persuing BTech in computer science and engineering from the APJ Abdul Kalam Technical University</p>

      <b>Skills and Expertise</b>


      <p>
        During college, I have learned a lot of technologies for software/application development, some of them are -
        During 2st year - HTML, CSS, JavaScript, ReactNative, Firebase. 
        During 3rd year - MongoDB, ReactJS, Node JS, Express JS, jwt, Redux toolkit, Context Api, Socket io and Advance JavaScript etc.
        I have also completed some projects using all these skills 
        1.- Ecommerse website 
        2.- food delivery app 
        3.- News showing website
        4.- Notes taking website
        5.- portfolio website
        and many more.
      </p>


      {/* Client Testimonials
    
    Including client testimonials is a great way to build trust and showcase your work. Reach out to previous clients and ask if they would be willing to provide a short testimonial. Make sure to include their name and company (if applicable) for added credibility.
    
    For example: */}

      {/* <p>"I worked with Sarah on a branding project for my startup, and I was blown away by her creativity and attention to detail. She took the time to understand our brand's values and created a visual identity that perfectly captured our message. I would highly recommend Sarah for any design project." - John Doe, Founder of XYZ Startup</p> */}



      <b>Personal Interests</b>

      {/* Including a section on your personal interests can add a human touch to your About page. It's an opportunity to showcase your personality and create a connection with your audience. You can include information such as your hobbies, volunteer work, or causes you're passionate about.
    
    For example: */}

      <p>In my free time, I love exploring new places. I'm also a big fan of martial Arts and practice on weekends. I'm passionate about sustainability and try to make environmentally conscious choices whenever possible.</p>


    </div>
  )
}

export default AboutPage
