/**
 *   The Main Application File
 */

// dependencies
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// containers
import Home from './containers/home';
import Page from './containers/page';
import Blog from './containers/blog';
import Post from './containers/post';

// init offline support
OfflinePluginRuntime.install();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="blog/:slug" component={Post} />
    <Route path="/:slug" component={Page} />
  </Router>,
  document.getElementById('content')
);
