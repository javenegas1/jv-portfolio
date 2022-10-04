import React, { useState } from 'react'

//bootstrap
import { Linkedin, Github, Phone, Building, Mailbox, Briefcase } from 'react-bootstrap-icons';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';

export default function Main() {

  const [show, setShow] = useState(true);

  return (
    <div className='profile'>

        <div className='image-section'>
            <h3 className='title'>Juan</h3>
            <h3 className='title' id='last-name'>Venegas</h3>
            <p className='position'>&lt; Software Developer <Briefcase></Briefcase> &gt;</p>

            <img src='https://imgur.com/WDluuXn.jpg' className='profile-img'></img>
            <div>
                <ul className='contact-info'>
                    <li><Building></Building> Atlanta, GA</li>
                    <li><Phone></Phone> <a href='tel:404-824-9367'>(404) 824-9367</a></li>
                    <li><Mailbox></Mailbox> venegas.a.juan37@gmail.com</li>
                    <li> <Linkedin></Linkedin> <a href='https://www.linkedin.com/in/juan-venegas-600254163/'>LinkedIn</a></li>
                    <li> <Github></Github> <a href='https://github.com/javenegas1'>My Github</a></li>

                </ul>
            </div>
        </div>

        <div className='profile-info'>
            {/* have text transform hello welcome from 5 different languages */}
            <div className='intro'>
            <h3>Hello! Welcome!</h3>
            <Card  className='w-75' id='thank-you-card'>
                <Card.Body><h4><span>Thank you</span> for visiting my portfolio page!</h4></Card.Body>
            </Card>
            <p>
                I definitely appreciate the time you've taken to get to know me. Feel free to use any of the links to continue investigating a little more!
            </p> 
            </div>

    <ToastContainer className="p-3" position='bottom-end'>
    <Toast animation={true} onClose={() => setShow(false)} show={show} delay={7000} autohide bg='dark'>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">From Juan Venegas</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body><p className='green'>Yes, I like the color <span>Green</span></p></Toast.Body>
    </Toast>
    </ToastContainer>

        </div>

    </div>
  )
}
