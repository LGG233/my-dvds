import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo-image" id="home-page-image" src={require("./DVD.jpg")} alt="DVD" />
        <p>
          Welcome to My DVDs!
        </p>
        <div className="actionItems row btn-row">
          <button className="actionItem btn btn-primary" id="addFilm" type="submit">Add film</button>
          <button className="actionItem btn btn-primary" id="lookUp" type="submit">Look up</button>
          <button className="actionItem btn btn-primary" id="randomFilm" type="submit">Random</button>
        </div>
      </header>
    </div>
  );
}

export default App;
