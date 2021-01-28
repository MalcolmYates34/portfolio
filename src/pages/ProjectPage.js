import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

function ProjectPage(props) {
  return (
    <div>
      <Header title={props.title} />
      <h1> Click On A Project For More Info</h1>
      <Carousel/>
    </div>
  );
}

export default ProjectPage;
