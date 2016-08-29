/**
 *   Single Post Container
 * =============================================================================
 */

// components
import Button from '../../components/button/button.jsx';

class Post extends React.Component {
  constructor(props) {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    fetch('//' + window.location.hostname + '/wp-json/wp/v2/posts/?slug=' + this.props.params.slug)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          post: responseData
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        {this.state.post.map((current) =>
          <article className="post">
            <h1 className="post__title" dangerouslySetInnerHTML={{__html: current.title.rendered}} />
            <section className="post__entry" dangerouslySetInnerHTML={{__html: current.content.rendered}} />
          </article>
        )}
        <section className="post__nav">
          <Button>Previous Post</Button>
          <Button>Next Post</Button>
        </section>
      </div>
    );
  }
}

export default Post
