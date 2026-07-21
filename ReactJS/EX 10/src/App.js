import "./App.css";

import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  return (
    <div>
      <h1>Cricket App</h1>

      <ListofPlayers />

      <IndianPlayers />
    </div>
  );
}

export default App;