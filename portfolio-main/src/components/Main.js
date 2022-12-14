import React, { useState } from 'react'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

//bootstrap
import { Linkedin, Github, Phone, Building, Mailbox } from 'react-bootstrap-icons';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';

export default function Main() {

  const [show, setShow] = useState(true);

  const [text, count] = useTypewriter({
    words:['Hello, Welcome', 'Hola, Bienvenidos', 'こんにちは ようこそ',  'Bonjour, Bienvenue', 'Hallo, Willkommen', 'Xin chào hoan nghênh', 'Ola, Bem-vindos', '你好 欢迎'],
    loop:true,
    delaySpeed: 4000,
    deleteSpeed: 50
  })

  return (
    <div className='profile'>

        <div className='image-section'>
            <h3 className='title'>Juan</h3>
            <h3 className='title' id='last-name'>Venegas</h3>

            <img src='https://imgur.com/WDluuXn.jpg' className='profile-img'></img>
            <div>
                <ul className='contact-info'>
                    <li><Building></Building> Atlanta, GA</li>
                    <li><Phone></Phone> <a href='tel:404-824-9367'>(404) 824-9367</a></li>
                    <li><Mailbox></Mailbox> <a href='mailto:venegas.a.juan37@gmail.com'> venegas.a.juan37@gmail.com </a></li>
                    <li> <Linkedin></Linkedin> <a href='https://www.linkedin.com/in/juan-venegas-swe/' target="_blank" rel="noopener noreferrer" >LinkedIn</a></li>
                    <li> <Github></Github> <a href='https://github.com/javenegas1' target="_blank" rel="noopener noreferrer" >My Github</a></li>
                </ul>
            </div>
        </div>

        <div className='profile-info'>
            <div className='intro'>
            <h3>{text}
            <Cursor cursorColor='#3ce69c' />!
            </h3>
            <Card  className='w-75' id='thank-you-card'>
                <Card.Body><h4><span>Thank you</span> for visiting my portfolio page!</h4></Card.Body>
            </Card>
            <p>
                I'm Juan, and I am a <span className='highlights'>Software Developer</span> with experience using <span className='highlights2'>Python</span> and <span className='highlights2'>JavaScript</span> based tools such as <span className='highlights2'>Django</span> and <span className='highlights2'>React</span>. Feel free to use my contact info to talk more about my credentials, soccer, or anything else you'd like!
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
