import React, {Component} from 'react';
import {Table} from 'reactstrap';

export default class TablePrice extends Component {
  constructor() {
    super();
    this.state = {
      name: [
        "ลงโปรแกรม", "ลง Window", "maintenant"
      ],
      price: ["100", "200", "250(ค่าแรง)"],
    }
  }
  render() {
    return (
      <div >
        <h2>{this.props.title}</h2>
        <Table striped className="shadow-lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.state.name[0]}</td>
              <td>{this.state.price[0]}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{this.state.name[1]}</td>
              <td>{this.state.price[1]}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{this.state.name[2]}</td>
              <td>{this.state.price[2]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
