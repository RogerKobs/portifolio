import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import TelaPrincipal from "./pages/paginaPrincipal";
import ListaCompras from "./pages/listaCompras";

const Routes = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={TelaPrincipal} />
      <Route exact path="/listadecompras" component={ListaCompras} />

    </Switch>
  </BrowserRouter>
);

export default Routes;