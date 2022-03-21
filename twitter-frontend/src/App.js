import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import Singup from "./Container/Singup";
import Login from "./Container/Login";
import Home from "./Container/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello From React</h1>
        <Header title = 'Hello'/>
        <Footer/> */}
        
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>

          <Route exact path = "/login">
            <Login></Login>
          </Route>

          <Route exact path = "/singup">
            <Singup></Singup>
          </Route>

        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
