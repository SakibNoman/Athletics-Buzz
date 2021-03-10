import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Error404 from "./Components/Error404/Error404";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Header />
          <Home />
        </Route>
        <Route path="/:league/:leagueId/:leagueName" >
          <Header />
          <TeamDetails></TeamDetails>
        </Route>
        <Route path="*" >
          <Error404></Error404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
