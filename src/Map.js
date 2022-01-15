import React, { useEffect, useState } from "react";
import "./Map.css";
import SplitImage from "./assets/maps/split.png";
import FractureImage from "./assets/maps/fracture.png";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { ImageMap } from "@qiuz/react-image-map";

function Map() {
  const [mapSelected, setMapSelected] = useState("");
//   const [mapAreas, setMapAreas] = useState("")
  const mapHash = {
    Split: SplitImage,
    Fracture: FractureImage,
  };

  const mapArea = [
    {
      left: "37%",
      top: "8.5%",
      height: "5%",
      width: "5%",
      style: {
        background: "rgba(255, 0, 0, 0.5)",
        borderRadius: "50%",
        cursor: "pointer",
      },
      onMouseOver: () => console.log("map onMouseOver"),
    },
  ];

  useEffect(() => {
   
  }, [])

  return (
    <div className="map">
      <h1>Line-ups</h1>
      <FormControl fullWidth>
        <InputLabel id="map">Select Map</InputLabel>
        <Select
          labelId="map"
          label="Select Map"
          onChange={(e) => {
            setMapSelected(e.target.value);
          }}
        >
          {Object.keys(mapHash).map((key, index) => {
            return (
              <MenuItem key={index} value={key}>
                {key}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div className="map__container">
        {!mapSelected ? (
          <div className="map__placeholder">Select Map</div>
        ) : (
          <ImageMap
            className="map__map"
            map={mapArea}
            src={mapHash[mapSelected]}
          />
        )}
      </div>
    </div>
  );
}

export default Map;
