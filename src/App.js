// import logo from './logo.svg';
// import './App.css';
import {Row,Card,Col} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class App extends React.Component {
  render() {
    return(
      <Row xs={1} md={2} className="g-4">
  
    
  <Col>
      <Card>
        <center>
        <Card.Img style={{height:100,width:100}} variant="top" src="part2.gif" />
        </center>
        <Card.Body>
          <Card.Title>Student <FontAwesomeIcon icon="fa-solid fa-user" /></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <center>
        <Card.Img  style={{height:100,width:100}}variant="top" src="down.gif" />
        </center>
        <Card.Body>
          <Card.Title>Enterpreneur</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <center>
        <Card.Img  style={{height:100,width:100}} variant="top" src="part3.gif" />
        </center>
        <Card.Body>
          <Card.Title>Startup</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <center>
        <Card.Img style={{height:100,width:100}} variant="top" src="part1.gif" />
        </center>
        <Card.Body>
          <Card.Title>Investor</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <center>
        <Card.Img  style={{height:100,width:100}} variant="top" src="part4.gif" />
        </center>
        <Card.Body>
          <Card.Title>Organization BiUserPin</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 
</Row>

  );
  }
}