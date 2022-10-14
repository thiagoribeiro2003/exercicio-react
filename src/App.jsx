import { BrowserRouter, Route, Routem, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Cabecalho from "./components/layout/Cabecalho";

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
