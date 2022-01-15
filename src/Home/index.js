import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import LineupList from "./LineupList";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Button
        onClick={() => {
          navigate("/map");
        }}
      >
        Go to Map
      </Button>
      <h1>this is the home page</h1>
      <LineupList/>
    </div>
  );
}

export default Home;
