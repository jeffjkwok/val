import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAgents } from "../../features/agentSlice";

function LineupFilter() {
  const maps = [
    "Ascend",
    "Bind",
    "Breeze",
    "Fracture",
    "Haven",
    "Icebox",
    "Split",
  ];
  const agentsHash = useSelector(selectAgents);
  const [agentFilter, setAgentFilter] = useState("");
  const [mapFilter, setMapFilter] = useState("");
  return (
    <div className="lineupList__filter">
      <FormControl fullWidth>
        <InputLabel id="agent"> Filter for Agent</InputLabel>
        <Select
          labelId="agent"
          onChange={(e) => setAgentFilter(e.target.value)}
        >
          {Object.keys(agentsHash).map((agent, index) => {
            return (
              <MenuItem key={index} value={agent}>
                {agent}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="map"> Filter for Map</InputLabel>
        <Select labelId="map" onChange={(e) => setMapFilter(e.target.value)}>
          {maps.map((map, index) => {
            return (
              <MenuItem key={index} value={map}>
                {map}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default LineupFilter;
