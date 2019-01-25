import React from "react";
import "./style.css";

function OwlCard(props) {
  return (
    <div className="card" onClick={() => props.clickOwl(props.id)}>
      <div className="img-container">
        <img src={props.image} alt="Owl" />
      </div>
    </div>
  );
}

export default OwlCard;
