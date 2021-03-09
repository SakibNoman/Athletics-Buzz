import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/league/:leagueId/:leagueName" >
          <TeamDetails></TeamDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
