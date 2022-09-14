import React from "react"
import audi from "../Images/AUDI Q5.jpeg"
import urus from "../Images/urus.jpeg"
import toyota from "../Images/toyota.jpeg"
import bmw from "../Images/BMW.jpeg";
import dodge from "../Images/dodge.jpeg"
import ford from "../Images/ford.jpeg"
import Card from 'react-bootstrap/Card';
function Home(){
    return(
        <div id="home" className="about">
            <h1>Venom car yard.</h1>
            <header>About us</header>
            <p>We are a car yard located in Ngong road,Kenya.We deal with various types of cars eg : </p>
             <li>AUDI</li>
             <li>Lamborghini</li>
             <li>Toyota</li>
             <li>BMW</li>
             <li>DODGE</li>
            <li>FORD</li>   
                <p>We have been serving Kenyans gracefully for 23 years now!</p>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={audi} />
      <Card.Body>
        <Card.Title>AUDI Q5</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urus} />
      <Card.Body>
        <Card.Title>Lamborghini urus</Card.Title>

      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={toyota} />
      <Card.Body>
        <Card.Title>Toyota Harrier</Card.Title>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bmw} />
      <Card.Body>
        <Card.Title> BMW X7</Card.Title>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dodge} />
      <Card.Body>
        <Card.Title>Dodge SRT Challenger</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ford} />
      <Card.Body>
        <Card.Title>Ford Mustang</Card.Title>
      </Card.Body>
    </Card>
        </div>    
        )
    }
    export default Home