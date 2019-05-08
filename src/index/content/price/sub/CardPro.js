import React, { Component } from 'react';
import { Card, Badge, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

export default class CardPro extends Component {
    constructor(){
        super();
        this.state={
            namepro:["โปรโมชั่นลงโปรแกรม","โปรโมชั่นลง Window", "โปรโมชั่นการซ่อม"],
            
        };
        
    }
    render() {
        const Pro = (props) => {
            return (
              <CardDeck>
                <Card className="shadow-sm">
                  <CardImg top width="100" height="80"  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle ><Badge color="success">{this.state.namepro[0]}</Badge></CardTitle>
                    <CardText></CardText>
                  </CardBody>
                </Card>
                <Card className="shadow-sm">
                  <CardImg top width="100" height="80" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle color="success"><Badge color="success">{this.state.namepro[1]}</Badge></CardTitle>
                    <CardText></CardText>
                  </CardBody>
                </Card>
                <Card className="shadow-sm">
                  <CardImg top width="100" height="80" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle><Badge  color="success">{this.state.namepro[2]}</Badge ></CardTitle>
                    <CardText></CardText>
                  </CardBody>
                </Card>
              </CardDeck>
            );
          };
        return (
            <div>
                <h2>{this.props.promotion}</h2>
               <Pro/>
            </div>
        )
    }
}



  
  