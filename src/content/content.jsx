/**
 *   Content :: The Main Application File
 * =============================================================================
 */

import { Router, Route, browserHistory } from 'react-router'

// import all content types
import Home from './home/home.jsx';
import Page from './page/page.jsx';
import Posts from './posts/posts.jsx';
import Single from './single/single.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="blog" component={Posts} />
    <Route path="blog/:postID" component={Single} />
  </Router>,
  document.getElementById('content')
);
