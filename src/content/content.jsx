/**
 *   Content :: The Main Application File
 * =============================================================================
 */

import { Router, Route, browserHistory } from 'react-router'

// import all content types
import Home from './home/home.jsx';
import Page from './page/page.jsx';
import Blog from './blog/blog.jsx';
import Post from './post/post.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="blog/:postID" component={Post} />
  </Router>,
  document.getElementById('content')
);
