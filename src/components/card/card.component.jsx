import React from "react";
import './card.styles.css'

export const Card =(props)=>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} alt="monster" />
        <h4>{props.monster.name}</h4>
        <p>{props.monster.email}</p>
    </div>
)