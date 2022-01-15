import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>this is the home page</h1>
      <button
        onClick={() => {
          navigate("/map");
        }}
      >
        Go to Map
      </button>
    </div>
  );
}

export default Home;
