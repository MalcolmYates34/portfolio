import React,{Component} from "react";
import {Container, Row} from "react-bootstrap";
import explorer from "../assests/images/Screen Shot 2020-10-07 at 11.37.15 PM.png";
import workDay from "../assests/images/Screen Shot 2020-10-07 at 11.34.18 PM.png";
import weather from "../assests/images/Screen Shot Project 1.png";
import Card from "./Card";




class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: "Work Day Scheduler",
                    subTitle: "App to map out your work day",
                    imgSrc: workDay,
                    demo: "https://malcolmyates34.github.io/5homework/",
                    repo: "https://github.com/MalcolmYates34/5homework",
                    selected: false,
                },
                {
                    id: 1,
                    title: "Group Project: Explorer",
                    subTitle: "Find out the weather and fun things todo on vacation",
                    imgSrc: explorer,
                    demo: "https://talysh.github.io/explorer/",
                    repo: "https://github.com/talysh/explorer",
                    selected: false,
                },
                {
                    id: 2,
                    title: "Weather Dashboard",
                    subTitle: "App to find out the weather in your area",
                    imgSrc: weather,
                    demo: "https://malcolmyates34.github.io/6homework/",
                    repo: "https://github.com/MalcolmYates34/6homework",
                    selected: false,
                },
            ]
        }
    }

    handleCardClick = (id, card) =>{
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }


    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){

        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;