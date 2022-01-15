import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import React from "react";
import LineupFilter from "./LineupFilter";
import "./LineupList.css";

function LineupList() {
  return (
    <div className="lineupList">
      <LineupFilter/>
    </div>
  );
}

export default LineupList;
