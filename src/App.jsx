import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Cabecalho from "./components/layout/Cabecalho";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/frontend">
            <Frontend />
          </Route>

          <Route path="/backend">
            <Backend />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
