import React from 'react'

export default function About() {
  return (
    <div className='about-page'>
    <h2 className='titles'>About Me</h2>

        <div className='background'>
          <div>
              collage of three pictures here set up side by side with background paragraph
          </div>
          <div>
          Hello everyone! I'm Juan, a banker turned programmer. I've been coding now for over a year, and I have set my sights on making a full transition into the tech world. Along this journey, my focus has been on learning valuable frameworks commonly used throughout the tech world revolving primarily around JavaScript and Python. I am always looking to learn and continue expanding the knowledge I have; after all, that is what this industry is all about! My added value comes in the form of someone who has been proven to be motivated, learn quickly, provide results on projects and deliverables, and who can work with a team. Please do not hesitate to reach out!
          </div>
        </div>

        <hr></hr>

        <div className='skills'>
          Proficiencies
          <ul>
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
        </div>

        <hr></hr>

        <div className='education'>

          <div>
            <h3>Georgia State Univesity</h3>
            <ul>
              <li>B.S Economics, minor Political Science</li>
              <li></li>
              <li>GPA: 3.68</li>
            </ul>
          </div>

          <div>
            <h3>General Assembly</h3>
            <ul>
              <li>Software Engineering Immersive Certification</li>
              <li></li>
              <li>Full Course Completion</li>
            </ul>
          </div>
        </div>
    </div>
  )
}
