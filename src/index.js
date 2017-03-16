/**
 * The Main Application File
 */

// dependencies
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// containers
import Blog from './containers/blog';
import Home from './containers/home';
import Page from './containers/page';
import Post from './containers/post';

// components
import Content from './components/content';
import Footer from './components/footer';
import Navigation from './components/navigation';

// styles
import './styles/base';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navigation />
      <Content>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Post} />
        <Route path="/:slug" component={Page} />
      </Content>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);

// init offline support
OfflinePluginRuntime.install();
