import React, {Component} from 'react';
import Cenavbar from './sub/Navbar';
import Cenews from './sub/News';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Cenews/>
        <Cenavbar/>
      </div>
    );
  }
}
