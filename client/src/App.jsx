import { useState } from "react";
import "./App.css";
import Sidebar from './components/SideBar/Sidebar'

function App() {

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
