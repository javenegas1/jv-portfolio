import React from 'react'

//bootstrap
import { CupFill, Controller, Globe, EggFried } from 'react-bootstrap-icons';
import { FaJsSquare } from 'react-icons/fa';
import { DiJsBadge, DiCss3, DiBootstrap, DiMongodb, DiReact, DiPostgresql, DiDjango, DiPython } from 'react-icons/di';
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
          <p>Project initiated to help freelance chefs! Feel free to visit this <a href='https://hotplate-proj.herokuapp.com/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/hotplate' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li><DiPython/></li>
            <li><DiDjango/></li>
            <li><DiPostgresql/></li>
            <li><DiCss3/></li>
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
          <p>This project was started to help you find the next beer you want to drink! Feel free to visit this <a href='https://magical-sherbet-8dd300.netlify.app/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/brewery-api' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li><DiMongodb/></li>
            <li><DiReact/></li>
            <li><DiJsBadge/></li>
            <li><DiBootstrap/></li>
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
          <p>This project was developed alongside Sohaib Ali <a href='https://www.linkedin.com/in/sohaib-ali-swe/' target="_blank" rel="noopener noreferrer" >(LinkedIn here)</a> to provide a forum for those who want to share interview experiences. Feel free to visit this <a href='https://bravado-project.herokuapp.com/bravado/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/Bravado' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li><DiMongodb/></li>
            <li><DiJsBadge/></li>
            <li><DiBootstrap/></li>
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
          <p>This project was simply a fun one for me! My goal was to focus on the fundamentals: Object-oriented programming, function recursion, and DOM manipulation. Feel free to visit this <a href='https://javenegas1.github.io/Minesweeper/' target="_blank" rel="noopener noreferrer" >website here</a> or its <a href='https://github.com/javenegas1/Minesweeper' target="_blank" rel="noopener noreferrer" >Github page here!</a></p>
          <ul>
            <li><DiJsBadge/></li>
            <li><DiCss3/></li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
