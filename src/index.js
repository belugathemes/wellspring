// dependencies
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

// app
import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// init offline support
OfflinePluginRuntime.install();
