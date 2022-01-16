import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import LineupFilter from "./LineupFilter";
import { setCurrentLineup } from "../../features/lineupSlice";
import lineupData from "../../assets/json/lineups.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./LineupList.css";

function LineupList() {
  const loadingImages = require.context("../../assets/maps/loading", true);
  const lineups = lineupData.lineups;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToLineup = (lineup) => {
    dispatch(setCurrentLineup(lineup));
    navigate("/lineup");
  };
  return (
    <div className="lineupList">
      <h1 className="lineupList__title">Line-Ups</h1>
      {/* <LineupFilter /> */}
      <div className="lineupList__list">
        {lineups.map((lineup, index) => {
          let map = loadingImages(`./${lineup.map.toLowerCase()}Loading.png`);
          return (
            <div
              key={index}
              className="lineupList__item"
              onClick={() => {
                goToLineup(lineup);
              }}
            >
              <div className="lineupList__item--imageContainer">
                <LazyLoadImage src={map} alt="" />
                {/* <img src={map} alt="" loading="lazy" /> */}
              </div>
              <div className="lineupList__item--infoContainer">
                <h3>{lineup.title}</h3>

                <div className="lineupList__item--agentInfo">
                  <p>
                    <b>Agent: </b>
                    {lineup.agent}
                  </p>
                  <p>
                    <b>Ability: </b>
                    {lineup.ability}
                  </p>
                </div>

                <div className="lineupList__item--mapInfo">
                  <p>
                    <b>Map: </b>
                    {lineup.map}
                  </p>
                  <p>
                    <b>Side: </b>
                    {lineup.side}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LineupList;
