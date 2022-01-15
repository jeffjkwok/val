import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    agents: {
      Neon: "",
      Jett: "",
      Raze: "",
      Yoru: "",
      Reyna: "",
      Phoenix: "",
      Astra: "",
      Viper: "",
      Brimstone: "",
      Omen: "",
      "Kay/o": "",
      Skye: "",
      Sova: "",
      Breach: "",
      Cypher: "",
      Sage: "",
      Chamber: "",
      Killjoy: ""
    },
};

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
});

export const {} = agentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAgents = (state) => state.agent.agents;

export default agentSlice.reducer;
