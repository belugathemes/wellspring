// dependencies
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// containers
import BlogContainer from './containers/blog';
import HomeContainer from './containers/home';
import PageContainer from './containers/page';
import PostContainer from './containers/post';

// components
import Content from './components/content';
import Footer from './components/footer';
import Navigation from './components/navigation';

// styles
import './styles/base';
import './styles/type';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navigation />
      <Content>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/blog" component={BlogContainer} />
          <Route path="/blog/:slug" component={PostContainer} />
          <Route path="/:slug" component={PageContainer} />
        </Switch>
      </Content>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);

// init offline support
OfflinePluginRuntime.install();
