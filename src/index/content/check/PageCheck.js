import React, {Component} from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Container
} from 'reactstrap';
import Show from './sub/Show';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      page:'',
      value: '',
      statusV: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    if(event.target.value === '1234'){
      this.setState({statusV: '1'});
    }else{
      this.setState({statusV: '0'});
    }
    
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value + ' status :' + this.state.statusV);
    if(this.state.value === '1234'){
      this.setState({page: <Show title="Your status" codeid={this.state.value}  stValue={this.state.statusV} />});
      console.log(this.state.statusV);
    }else{
      this.setState({page: <Show title="Your status" codeid={this.state.value}  stValue={this.state.statusV} />});
      console.log(this.state.statusV);
    }
    event.preventDefault();
  }
  
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col
            sm={{
            size: 6,
            offset: 2
          }}
            className="text-center">
            <Form inline className="text-center" onSubmit={this.handleSubmit}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  className="shadow-sm"
                  type="text"
                  name="code"
                  value={this.state.value} 
                  onChange={this.handleChange}
                  id="codefix"
                  placeholder="Fill this here !!" required/>
              </FormGroup>
              <Button type="submit" className="shadow-lg">Search</Button>
            </Form>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>{this.state.page} 
          </Col>
        </Row>
      </Container>

    );
  }
}
