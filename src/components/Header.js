import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import "./style.css";


function Header(props){

    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center  text-color">
            <Col >
              {props.title && (
                <h1 className="justify-content-center display-1 font-weight-bolder">{props.title}</h1>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
}

export default Header;