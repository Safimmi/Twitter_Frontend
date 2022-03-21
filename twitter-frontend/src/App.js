import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import Signup from "./Container/Signup";
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

          <Route exact path = "/signup">
            <Signup></Signup>
          </Route>

        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
