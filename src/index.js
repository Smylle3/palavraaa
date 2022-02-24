import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Rotas from "./routes/routes"

ReactDOM.render(
  <BrowserRouter>
    <Rotas />
  </BrowserRouter>,
  document.getElementById('root')
);