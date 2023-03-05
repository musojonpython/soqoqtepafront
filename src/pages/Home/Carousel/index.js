import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';

const Carousels = () => {
    return ( <
        div className = 'w-100' >
        <
        div class = "container-fluid p-0" >
        <
        Carousel >
        <
        Carousel.Item >
        <
        img height = '100%'
        className = "d-block w-100"
        src = './1.jpg'
        alt = "First slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        img height = '100%'
        className = "d-block w-100"
        src = "./2.jpg"
        alt = "Second slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        img height = '100%'
        className = "d-block w-100"
        src = "./3.jpg"
        alt = "Third slide" /
        >
        <
        /Carousel.Item> <
        Carousel.Item >
        <
        img height = '100%'
        className = "d-block w-100"
        src = "./4.jpg"
        alt = "Third slide" /
        >
        <
        /Carousel.Item> 
        <Carousel.Item >
        <
        img height = '100%'
        className = "d-block w-100"
        src = "./5.jpg"
        alt = "Third slide" />
        </Carousel.Item> </Carousel > <
        /div> < /div >
    );
}

export default Carousels;