import React, {Component} from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import banner from './../../../img/banner.jpg';

export default class About extends Component {
  constructor(){
    super();
    this.state={
      
      university: "Suan Sunandha Rajabhat",
      faculty: "Industrial Technology",
      facebook: "CE-SSRU",
      phone:"012345678"
    };
    
  }
  render() {
    
    return (
      <Container>
        
        <Row className="mt-5 ">
          <Col lg={{size:6,offset:3}}>
            <Card className="shadow-sm">
              <CardImg
                top
                width="100"
                height="200"
                src={banner}
                alt=""/>
              <CardBody>
                <CardTitle><h2>About us</h2></CardTitle>
                <CardText>
                  <p>University : {this.state.university}</p>
                  <p>Faculty : {this.state.faculty}</p>
                  <p>Facebook : {this.state.facebook}</p>
                  <p>Phone Number : {this.state.phone}</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
