import React, {Component} from 'react';
import {Container} from 'reactstrap';
import PageRoute from './../router/PageRoute';
export default class Content extends Component {
  
  render() {
    return (
        <Container className="cebody">
            <PageRoute/>
        </Container>
    )
  }
}

