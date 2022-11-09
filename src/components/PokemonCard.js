import React, { useState } from "react";
import "./PokemonCard.css";
import pokebola from "../images/pokebola.png";
import Modal from "./Modal";

function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
    
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }


  return (
    <div className="container">
      {isShown && (
      <div className="show">
        <div className="stat-container-tittle">
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: " 180px", color: "" }}>No. {id}</p>
          <p>{name}</p>
          <img src={pokebola} alt="pokebola" className="pokebola-title" />
        </div>
        <img src={image} alt={name} />
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{ background: "#dbdbd9", textAlign: "center" }}
            className="stats-left"
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div style={{ background: "#ffffff" }} className="stats-right"></div>
          <p>{type}</p>
          <p>{height}0 cm</p>
          <p>{weight} lbs</p>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
        </div>
      </div>
      )}
      <div className="right"
       onMouseEnter={() => setIsShown(true)}
       onMouseLeave={() => setIsShown(false)}
       onClick={modalHandler}
       >
        <img src={image} alt={name} style={{maxHeight:"50px", marginRight:"10px", width:"50px"}} />
        <p style={{width:"270px"}}>No. {id}</p>
        <img src={pokebola} alt="pokebola" style={{marginLeft:"auto", width:"40px"}}></img>
      </div>
      {modalIsOpen && (
        <modal id={id}
        name={name}
        image={image}
        height={height}
        weight={weight}
        stats={stats}
        statsName={statsName}
        type={type}
        onClick={closeModalHandler}
        />        
      )}
    </div>
  );
}

export default PokemonCard;
