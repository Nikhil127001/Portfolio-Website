import React from 'react'

const AboutPage = (props) => {
  const {Color} = props
  return (
    <div className='container mt-5' style={{fontSize:"20px", color: `${Color==="dark"?"white":"black"}`}}><p>Hi there! My name is Sarah Johnson, and I'm a freelance graphic designer based in Los Angeles. I'm passionate about creating visual experiences that captivate audiences and tell compelling stories. With over 7 years of experience in the industry, I've worked with a variety of clients, from small startups to Fortune 500 companies. I believe that design is about more than just aesthetics; it's about creating a connection between brands and their audiences.</p>
      <b>Background and Experience</b>


      <p>After your introduction, provide more details about your background and experience. This section should showcase your skills and highlight your achievements. You can include information such as your education, professional experience, and certifications.</p>


      <p>
        I graduated from the University of California, Los Angeles with a degree in Graphic Design. After graduation, I started my career as an intern at a boutique design agency, where I honed my skills in branding, typography, and illustration. From there, I moved on to a larger agency, where I worked on projects for clients such as Nike, Coca-Cola, and Google. In 2018, I decided to start my own freelance business and have been working with clients ever since.</p>

      <b>Skills and Expertise</b>


      <p>My expertise includes branding, typography, and illustration. I'm passionate about creating cohesive visual identities that resonate with audiences. I believe that typography is a powerful tool for communication and love experimenting with different typefaces and layouts. When it comes to illustration, I enjoy creating playful and whimsical designs that tell a story. I approach every project with a problem-solving mindset and strive to create designs that not only look great but also serve a purpose.</p>


      {/* Client Testimonials
    
    Including client testimonials is a great way to build trust and showcase your work. Reach out to previous clients and ask if they would be willing to provide a short testimonial. Make sure to include their name and company (if applicable) for added credibility.
    
    For example: */}

      <p>"I worked with Sarah on a branding project for my startup, and I was blown away by her creativity and attention to detail. She took the time to understand our brand's values and created a visual identity that perfectly captured our message. I would highly recommend Sarah for any design project." - John Doe, Founder of XYZ Startup</p>



      <b>Personal Interests</b>

      {/* Including a section on your personal interests can add a human touch to your About page. It's an opportunity to showcase your personality and create a connection with your audience. You can include information such as your hobbies, volunteer work, or causes you're passionate about.
    
    For example: */}

      <p>In my free time, I love exploring Los Angeles and trying out new restaurants. I'm also a big fan of yoga and practice regularly. I'm passionate about sustainability and try to make environmentally conscious choices whenever possible.</p>


    </div>
  )
}

export default AboutPage