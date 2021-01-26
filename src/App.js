import Header from './Header';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Projects from "./Projects";
import Contacts from "./Contacts";
import Education from './Eductaion';
import Footer from './Footer';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {

  return (
    <Router>
        <div className="container-wrapper">
          <Header />
          <div className="container-fluid page">
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <div className="push"></div>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
