import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";

import { Switch, Route } from "react-router-dom";
import { getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";

function App() {
  const dispatch = useDispatch();

  // const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={() => <Register />} />
          <Route exact path="/login" render={() => <Login />} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
