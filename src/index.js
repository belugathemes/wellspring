/**
 * The Main Application File
 */

// dependencies
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// containers
import Home from './containers/home';
import Page from './containers/page';
import Blog from './containers/blog';
import Post from './containers/post';

// components
import Navigation from './components/navigation';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <hr />
      <Navigation />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={Post} />
      <Route path="/:slug" component={Page} />
    </div>
  </BrowserRouter>,
  document.getElementById('content')
);

// init offline support
OfflinePluginRuntime.install();
