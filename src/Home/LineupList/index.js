import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LineupFilter from "./LineupFilter";
import { setCurrentLineup } from "../../features/lineupSlice";
import lineupData from "../../assets/lineups/lineups.json";
import "./LineupList.css";

function LineupList() {
  const lineups = lineupData.lineups;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToLineup = (lineup) => {
    dispatch(setCurrentLineup(lineup));
    navigate("/map");
  };
  return (
    <div className="lineupList">
      <h1 className="lineupList__title">Line-Ups</h1>
      <LineupFilter />
      <div className="lineupList__list">
        {lineups.map((lineup, index) => {
          return (
            <div
              key={index}
              className="lineupList__item"
              onClick={() => {
                goToLineup(lineup);
              }}
            >
              <h4>{lineup.title}</h4>
              <p>Agent: {lineup.agent}</p>
              <p>Ability: {lineup.ability}</p>
              <p>Map: {lineup.map}</p>
              <p>Side: {lineup.side}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LineupList;
