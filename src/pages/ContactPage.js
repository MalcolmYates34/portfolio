import React, { Component } from "react";
import {Form} from "react-bootstrap";

import Header from "../components/Header";
import Content from "../components/Content";
import { Button } from "react-bootstrap";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }


  handleChange = (e) =>{
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    this.setState({
      disabled: true
    });
  }


  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name"><h1>Full Name</h1></Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email"><h1>Email Address</h1></Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message"><h1>Message</h1></Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="5"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              varinat="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === true && (
              <p className="d-inline err-msg">Email Not 
              Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;