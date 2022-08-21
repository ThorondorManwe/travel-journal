import React from "react";
import fill from '../assets/fill_220.png';

export default function Card(props) {
    
    return(
        <div className="card">

            <img
                src={`${props.imageUrl}`}
                className="card-image"
            />

            <div className="cardInfo">

                <div className="cardInfo1">
                    <img src={fill} className="card--fill" />
                    <span>{props.location}</span>
                    <span className="location"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <p className="cardTitle">{props.title}</p>

                <div className="to">
                    <span>{props.startDate} - {props.endDate}</span>
                </div>

                <p className="description">{props.description}</p>
            </div>


        </div>
    )
}