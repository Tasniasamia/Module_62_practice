import React from 'react';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub,AiFillFacebook,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import ListGroup from 'react-bootstrap/ListGroup';
import Q_zone from '../Q-zone/Q_zone';
import ps_img from '../../assets/bg.png'
const Right_side = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div className="d-grid gap-2">
      <Button variant="outline-success" size="lg">
      <FcGoogle/> Login With Google
      </Button>
      <Button variant="outline-primary" size="lg">
     <AiFillGithub/>   Login With Github
      </Button>
      
    </div>
    <div>
        <h4 className='my-3'>Find Us On</h4>
        <ListGroup as="ul">
      <ListGroup.Item as="li" >
      <AiFillFacebook/>  Facebook
      </ListGroup.Item>
      <ListGroup.Item as="li"><AiFillTwitterCircle/>Twitter</ListGroup.Item>
    
      <ListGroup.Item as="li"><AiFillInstagram/>Instagram</ListGroup.Item>
    </ListGroup>
    </div>
    <div>
       <Q_zone></Q_zone> 
    </div>
    <div className='d-flex justify-content-center text-center '>
        <div className='position-relative'>
        <img src={ps_img} alt="bg-image" />
        <div className='position-absolute top-0 text-white p-5'>
            <h3>Create an Amazing Newspaper</h3>
            <p style={{fontSize:"20px"}}className="my-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn More</Button>

        </div>
        </div>
    </div>
        </div>
    );
};

export default Right_side;
