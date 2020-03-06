import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import * as scoreAPI from "./utils/score-api";
import NavBar from "./components/NavBar/NavBar";
import GameBoard from "./components/GameBoard/GameBoard";
class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <Route path="/" render={({history})=> 
        <div className="App">
        

          <header className="App-header">{/* <NavBar /> */}
          <nav className="nav-bar">
            <h2>2048 </h2>
            <section className='links-container'>
              <Link className='links' to="/" >Game</Link>
              <Link className='links' to="/leaderboard" >Leaderboard</Link>
            </section>
          </nav></header>
          <main className="container">
            <GameBoard history={history}
             />
          </main>
        </div>
      }
      />
    );
  }
}

export default App;
