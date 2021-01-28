import React from "react";
import CardInfo from "./CardInfo";

function Card(props){

    return(
            <div className="d-inline-block s-card" onClick={(e) => props.click(props.item)}>
                <img className="s-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} demo={props.item.demo} repo={props.item.repo}/>}
            </div>
        )
}

export default Card;