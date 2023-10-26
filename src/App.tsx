import React from "react";
import './App.css';
import ListenerBox from "./ListenerBox";
import Search from "./Search";

const App: React.FC = () => {
    return (
        <div>
            <Search />
            <div className="boxes-container">
                <ListenerBox />
                <ListenerBox />
                <ListenerBox />
                <ListenerBox />
                <ListenerBox />
                <ListenerBox />
            </div>
        </div>
    );
}

export default App;
