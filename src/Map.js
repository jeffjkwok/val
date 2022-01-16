import React from "react";
import "./Map.css";
import AscentImage from "./assets/maps/ascent.png";
import BindImage from "./assets/maps/bind.png";
import BreezeImage from "./assets/maps/breeze.png";
import FractureImage from "./assets/maps/fracture.png";
import HavenImage from "./assets/maps/haven.png";
import IceboxImage from "./assets/maps/icebox.png";
import SplitImage from "./assets/maps/split.png";

import { ImageMap } from "@qiuz/react-image-map";
import { useSelector } from "react-redux";
import { selectLineup } from "./features/lineupSlice";

function Map() {
  const lineup = useSelector(selectLineup);
  const mapHash = {
    Split: SplitImage,
    Fracture: FractureImage,
    Acent: AscentImage,
    Bind: BindImage,
    Breeze: BreezeImage,
    Haven: HavenImage,
    Icebox: IceboxImage,
  };

  return (
    <div className="map">
      <div className="map__container">
        <ImageMap
          className="map__map"
          map={lineup.mapArea}
          src={mapHash[lineup.map]}
        />
      </div>
    </div>
  );
}

export default Map;
