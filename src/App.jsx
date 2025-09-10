import React from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";

function App() {
  return (
    <div className="font-sans flex">
      <Sidebar />
      <ChatArea />
    </div>
  );
}

export default App;
