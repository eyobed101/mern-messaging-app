import { useState } from "react";
import "./App.css";
import Sidebar from './components/SideBar/Sidebar'
import Chat from "./components/Chat/Chat";

function App() {

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
