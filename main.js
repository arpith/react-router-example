import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';
import routes from './routes';
let mountNode = document.getElementById("react-mount");
let router = (
  <Router 
    history={createBrowserHistory()}
    routes={routes}
  />
);
render(router, mountNode);
