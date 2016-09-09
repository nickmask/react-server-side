'use strict';

import React from 'react'
import { Provider } from 'react-redux'
import { Route, IndexRoute } from 'react-router'
import Layout from './Layout';
import AthletePage from './athletes/athlete/AthletePage/AthletePage';
import PageNotFound from './PageNotFound/PageNotFound';
import { IndexPage } from './athletes/'
import { ShowsRoute } from './shows'
import { ShowRoute } from './shows/show'


const routes = (
  <Route path="/">
    <Route path="shows" component={ShowsRoute} />
    <Route path="shows/:id" component={ShowRoute} />
  </Route>
);

export default routes;

// <Route path="/" component={Layout}>
//   <IndexRoute component={IndexPage}/>
//   <Route path="athlete/:id" component={AthletePage}/>
//   <Route path="*" component={PageNotFound}/>
//   <Route path="shows" component={ShowsRoute} />
//   <Route path="shows/:id" component={ShowRoute} />
// </Route>
