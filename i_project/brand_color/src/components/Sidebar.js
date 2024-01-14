import React from 'react'
import Modal from "react-modal"
import { useState } from 'react';
import {GrClose} from "react-icons/gr"

function Sidebar(props) {
    const [modalIsOpen,setModalIsOpen] = useState(false)

    const toggleModal = () =>{
        setModalIsOpen(!modalIsOpen)
    }
  
  return (
    <>
    <aside className='sidebar'>
       <div className="logo">
        <a>brand <b>Color</b></a>
       </div>
       <div className="desciription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, neque molestias esse consectetur possimus odit.
       </div>
       <nav className="menu">
        <ul>
            <li>
                <a onClick={toggleModal}>About BrandColor</a>
            </li>
        </ul>
       </nav>
    </aside>
    
    <Modal isOpen={modalIsOpen}
    onRequestClose={toggleModal}
    className="about-modal"
    overlayClassName="about-modal-overlay"
    >

        <button className='modal-close-btn' onClick={toggleModal}>
            <GrClose/>
        </button>
        <h3>About BrandColor</h3>


        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto et sunt sit modi. Voluptatibus perspiciatis, accusamus quibusdam voluptatum fuga eos?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quam sit doloribus odio. Quasi nemo rerum enim voluptatem voluptas inventore.</p>
    </Modal>
    </>
  )
}
export default Sidebar;