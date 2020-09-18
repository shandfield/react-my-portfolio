import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import {env} from "./config"
ReactDOM.render(
  <BrowserRouter>
<App env={env}/>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
