import React from "react";
import Header from "../components/Header";
import MediaCard from "../components/MediaCard";

function HomePage(props) {
  return (
    <div className="bg-color m-0">
      <Header
        title={props.title}
      />
      <MediaCard subTitle={props.subTitle}>

      
      </MediaCard>
    </div>
  );
}

export default HomePage;
