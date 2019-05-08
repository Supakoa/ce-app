import React, {Component} from 'react';
import PageAbout from './../content/about/PageAbout';
import PagePrice from './../content/price/PagePrice';
import PageCheck from './../content/check/PageCheck';

import {BrowserRouter as Router, Route} from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      <Router >
        <Route path="/check" component={PageCheck}></Route>
        <Route path="/price" component={PagePrice}></Route>
        <Route path="/about" component={PageAbout}></Route>
      </Router>
    )
  }
}
