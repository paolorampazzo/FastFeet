import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';

import Dashboard from '../pages/Dashboard/Encomendas';
import Couriers from '../pages/Dashboard/Entregadores';
import Recipients from '../pages/Dashboard/Destinatarios';
import Problems from '../pages/Dashboard/Problemas';
import SignIn from '../pages/SignIn';
import AddHandout from '../pages/Dashboard/Encomendas/CadastrarEncomenda';
import AddCourier from '../pages/Dashboard/Entregadores/CadastrarEntregador';
import AddRecipient from '../pages/Dashboard/Destinatarios/CadastrarDestinatario';
import EditHandout from '../pages/Dashboard/Encomendas/EditarEncomenda';
import EditCourier from '../pages/Dashboard/Entregadores/EditarEntregador';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/couriers" exact component={Couriers} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/problems/:id?" exact component={Problems} isPrivate />
      <Route path="/dashboard/add" exact component={AddHandout} isPrivate />
      <Route path="/couriers/add" exact component={AddCourier} isPrivate />
      <Route path="/recipients/add" exact component={AddRecipient} isPrivate />
      <Route path="/handouts/:id" exact component={EditHandout} isPrivate />
      <Route path="/couriers/:id" exact component={EditCourier} isPrivate />

      <Route path="/" exact component={SignIn} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
