import React from 'react'

//bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

export default function About() {
  return (
    <div className='about-page'>
    <h2 className='titles'>About Me</h2>

        <div className='background'>
          <div className='collage-list'>
              <img src='https://imgur.com/372sga2.jpg' className='collage' id='image1'></img>
              <img src='https://imgur.com/PBI1wdA.jpg' className='collage' id='image2'></img>
              <img src='https://imgur.com/f16pHQA.jpg' className='collage' id='image3'></img>
              <img src='https://imgur.com/TwD15qv.jpg' className='collage' id='image4'></img>
              <p>
              Hello Everyone! I'm Juan, and I love traveling. Especially back to see my family in Costa Rica! More importantly for you to know, I am a banker turned programmer. I've been coding now for over a year, and I have set my sights on making a full transition into the tech world. Along this journey, my focus has been on learning valuable frameworks commonly used throughout the tech world revolving primarily around JavaScript and Python. I am always looking to learn and continue expanding the knowledge I have; after all, that is what this industry is all about! My added value comes in the form of someone who has been proven to be motivated, learn quickly, provide results on projects and deliverables, and who can work with a team. Please do not hesitate to reach out!
              </p>
          </div>
        </div>

        <div className='skills'>
        <h2 className='titles'>Proficient With:</h2>
          
          <ul className='skills-list'>
            <li>Node</li>
            <li>Python3</li>
            <li>React</li>
            <li>PostgresQL</li>
            <li>Express.js</li>
            <li>MongoDB/Mongoose</li>
            <li>Django</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>

        <h2 className='titles'>Education</h2>
        <div className='education'>
          <div className='gsu'>
          <img src='https://imgur.com/bqJ430y.jpg' className='gsu-image'/>
            <h3>Georgia State Univesity</h3>
            <ul>
              <li>B.S. Economics, Minor in Political Science</li>
              <li>GPA: 3.68</li>
              <li>Attended 2015-2018</li>
              <li>Graduated May 2018</li>
            </ul>
          </div>

          <div className='general-assembly'>
            <img src='https://imgur.com/MNXltTR.jpg' className='ga-image'/>
            <h3>General Assembly</h3>
            <ul>
              <li>Software Engineering Immersive Certification</li>
              <li>Full Course Completion</li>
              <li>450hr Course</li>
              <li>Primary focus on JS and Python frameworks</li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
