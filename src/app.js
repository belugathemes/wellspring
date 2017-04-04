// dependencies
import React from 'react';
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

// global styles
import './styles/base';
import './styles/type';

class App extends React.Component {
  constructor() {
    super();
    this.toggleNav = this.toggleNav.bind(this);
    this.state = { navIsOpen: false };
  }

  toggleNav() {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation onClick={this.toggleNav} navIsOpen={this.state.navIsOpen} />
          <Content onClick={this.state.navIsOpen && this.toggleNav} navIsOpen={this.state.navIsOpen}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/blog" component={BlogContainer} />
              <Route path="/blog/:slug" component={PostContainer} />
              <Route path="/:slug" component={PageContainer} />
            </Switch>
          </Content>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
