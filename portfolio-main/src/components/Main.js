import React from 'react'

//icons
import { Linkedin, Github, Phone, Building, Mailbox } from 'react-bootstrap-icons';


export default function Main() {
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
                    <li><Mailbox></Mailbox> venegas.a.juan37@gmail.com</li>
                    <li> <Linkedin></Linkedin> <a href='https://www.linkedin.com/in/juan-venegas-600254163/'>LinkedIn</a></li>
                    <li> <Github></Github> <a href='https://github.com/javenegas1'>My Github</a></li>

                </ul>
            </div>
        </div>

        <div className='profile-info'>
            {/* have text transform hello welcome from 5 different languages */}
            <h3>
                Hello! Welcome! 
            </h3>
            <p>
                <span>Thank you</span> for visiting my portfolio page!
            </p>
            <p>
                I definitely appreciate the time you've taken to get to know me. Feel free to use any of the links to continue investigating a little more!
            </p> 
        </div>

    </div>
  )
}
