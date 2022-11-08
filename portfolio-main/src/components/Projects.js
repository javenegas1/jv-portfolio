import React from 'react'

//bootstrap
import { CupFill, Controller, Globe, EggFried } from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
  return (
    <div className='projects-page'>

    <h2 className='titles'>My Projects</h2>

        <Carousel id='projects-carousel'>
        <Carousel.Item id='carousel-card'>
        <img
          className="d-block mx-auto"
          src="https://imgur.com/MKuWQMo.jpg"
          alt="First slide"
          id='project-img'
        />
        <Carousel.Caption id='carousel-words'>
          <h2>HotPlate <EggFried></EggFried> </h2>
          <p>This project was initiated with the goal of providing professionals in the food industry with a platform to showcase their talent and grow their client base. Using the power of Django to create a site where users can interact with each other and discover chefs they can submit work requests, I was able to set the foundation for a site that will hopefully help a great industry. Feel free to visit this <a href='https://hotplate-proj.herokuapp.com/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/hotplate' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li>Python3</li>
            <li>Django</li>
            <li>PostgresQL</li>
            <li>Bulma</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id='carousel-card'>
        <img
          className="d-block mx-auto"
          src="https://imgur.com/RFCVKZ4.jpg"
          alt="First slide"
          id='project-img'
        />
        <Carousel.Caption id='carousel-words'>
          <h2>BarHops <CupFill></CupFill> </h2>
          <p>This project was created with the intention of providing people an easy way to look up breweries near them through user invoked API calls. The goal is to transition this site into a full social media platform where people can interact with each other to make plans and schedule events! Feel free to visit this <a href='https://magical-sherbet-8dd300.netlify.app/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/brewery-api' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id='carousel-card'>
        <img
          className="d-block mx-auto"
          src="https://imgur.com/2iunmD7.jpg"
          alt="First slide"
          id='project-img'
        />
        <Carousel.Caption id='carousel-words'>
          <h2>Bravado <Globe></Globe> </h2>
          <p>This project was developed alongside Sohaib Ali <a href='https://www.linkedin.com/in/sohaib-ali-swe/' target="_blank" rel="noopener noreferrer" >(LinkedIn here)</a> to provide users with a forum style site where people could come to share interview experiences to show other what helped them or hurt them. Users can create profiles and share their own stories while bookmarking others to refer back to later. Feel free to visit this <a href='https://bravado-project.herokuapp.com/bravado/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/Bravado' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id='carousel-card'>
        <img
          className="d-block mx-auto"
          src="https://imgur.com/gxaSB14.jpg"
          alt="First slide"
          id='project-img'
        />
        <Carousel.Caption id='carousel-words'>
          <h2>Minesweeper <Controller></Controller> </h2>
          <p>This project was simply a fun one to immerse myself into the world of JavaScript! Figured I would put it in here in case you're feeling like a game of Minesweeper. It was definitely a childhood favorite. My goal was to focus on the fundamentals: Object-oriented programming, function recursion, and DOM manipulation. Feel free to visit this <a href='https://javenegas1.github.io/Minesweeper/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/Minesweeper' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li>Node</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
