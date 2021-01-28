import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Malcolm Yates McFadden",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Malcolm Yates McFadden",
        subTitle: "malcolmyates34@gmail.com",
        skills: "",
      },
      projects: {
        title: "My Projects",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container fluid={true} className="bg-color">
          <Navbar
            className="border-bottom text-color"
            bg="transparent"
            expand="lg"
          >

            <Navbar.Toggle
              className="border-0 "
              aria-controls="navbar-toggle"
            />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto mynav">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
              />
            )}
          />
          <Route
            path="/projects"
            render={() => <ProjectPage title={this.state.projects.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
