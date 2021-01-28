import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="s-card-info" style={style}>
      <p className="s-card-title">{props.title}</p>
      <p className="s-card-subtitle">{props.subTitle}</p>
      <a href={props.demo} target="_blank" rel="noopener noreferrer">
      Deployed Version
      </a>
      <a href={props.repo} target="_blank" rel="noopener noreferrer">
      GitHub Repository
      </a>
    </animated.div>
  );
}

export default CardInfo;
