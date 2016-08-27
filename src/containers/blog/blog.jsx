/**
 *   Blog Page Content Type
 * =============================================================================
 */

import $ from 'jquery';

// import components
import Excerpt from '../../components/excerpt/excerpt.jsx';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts : []
    };
  }

  componentWillMount() {
    this.serverRequest = $.get('//' + window.location.hostname + '/wp-json/wp/v2/posts', function (response) {
      this.setState({
        posts : response
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="blog">
        {this.state.posts.map((post) =>
          <div className="blog__column">
            <Excerpt
              key={post.id}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
            />
          </div>
        )}
    </div>
    );
  }
}

export default Blog
