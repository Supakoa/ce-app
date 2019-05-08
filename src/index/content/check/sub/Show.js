import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import Search from './../PageCheck';


export default class Show extends React.Component {
  constructor(props){
    super(props);
    this.state={
      status:['ไม่พบข้อมูลของท่าน', 'รอการตรวจสอบ...','กำลังรออะไหล่', 'กำลังดำเนินการ', 'เสร็จเรียบร้อย'],
      
    }
  }
  render() {
    // if(this.props.codeid == 123){

    // }
    return (
      <div>
          
        <h3>{this.props.title}</h3>
        <h5>Your CodeID {this.props.codeid}</h5>
        <div>
          {
            this.statusFix(this.props.stValue)
            
          }
        </div>
      </div>
    );
  }
  statusFix(e) {
    if(e === '0'){
      console.log(this.props.stValue)
      return(
        <ListGroup className="text-center">
            <ListGroupItem className="shadow-sm" tag="a"  action>{this.state.status[0]}</ListGroupItem>
        </ListGroup>
      );
    }else {
      return(
        <ListGroup className="text-center">
            <ListGroupItem className="shadow-sm" tag="a"  action>{this.state.status[1]}</ListGroupItem>
        </ListGroup>
      );
    }
    
  } 
}