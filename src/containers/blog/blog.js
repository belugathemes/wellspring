/**
 *   Blog Page Container
 * =============================================================================
 */

// fetch polyfill
import 'whatwg-fetch'

// components
import Excerpt from '../../components/excerpt'

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    fetch('//' + window.location.hostname + '/wp-json/wp/v2/posts?filter[posts_per_page]=6')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <div className="blog">
        {this.state.data.map((post) =>
          <div className="blog__column">
            <Excerpt
              key={post.id}
              title={post.title.rendered}
              url={post.link}
              excerpt={post.excerpt.rendered}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Blog
