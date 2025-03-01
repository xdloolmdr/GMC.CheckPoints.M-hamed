import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";

const App = () => {
  return (
    <div>
      <h1 className="text-center my-4">FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;

