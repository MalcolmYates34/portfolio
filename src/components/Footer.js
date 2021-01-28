import React from "react";
import {Container, Row, Col} from "react-bootstrap"


function Footer(){
    return (
      <footer className="mt-5 bg-color text-color" fluid={true}>
        <Container>
          <Row className="border-top justify-content-center p-3">
            <Col className="p-0 d-flex justify-content-center">
              <h1> Malcolm McFadden </h1>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;