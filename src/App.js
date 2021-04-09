import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import { Route, Switch } from "react-router";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
