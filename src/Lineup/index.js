import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLineup } from "../features/lineupSlice";
import Map from "../Map";
import "./Lineup.css";

function Lineup() {
  const lineup = useSelector(selectLineup);
  const navigate = useNavigate("/");
  console.log(lineup);
  if (lineup === null) {
    navigate("/");
  }

  return (
    <div className="lineup">
      <div className="lineup__info">
        <h2>{lineup.title}</h2>
        <p>{lineup.description}</p>
      </div>
      <Map />
      <div className="lineup__backgroundText">{lineup.agent}</div>
      {/* <div className="lineup__backgroundNumber">04</div> */}
    </div>
  );
}

export default Lineup;
