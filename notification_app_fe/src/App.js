import React from "react";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <div>
      <PriorityNotifications />
      <AllNotifications />
    </div>
  );
}

export default App;