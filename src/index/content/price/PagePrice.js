import React, {Component} from 'react'
import { Container, Col, Row} from 'reactstrap';
import TablePrice from './sub/TablePrice';
import CardPro from './sub/CardPro';

export default class Price extends Component {
  render() {
    return (
      <Container className="mt-4">
      <Row className="mb-4">
        <Col lg={{size:7,offset:2}}><CardPro promotion="Promotion Of the Month"/></Col>
      </Row>
      <Row>
        <Col lg={{size:7,offset:4}}><TablePrice title="ตารางราคา"/></Col>
      </Row>
      
      </Container>
    );
  }
}


