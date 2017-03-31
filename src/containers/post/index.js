// dependencies
import React from 'react';

// components
import Post from '../../components/post';

class PostContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    const dataURL = `//${window.location.hostname}/wp-json/wp/v2/posts?slug=${this.props.match.params.slug}`;
    fetch(dataURL)
      .then(response => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(post =>
          <Post
            key={post.id}
            title={post.title.rendered}
            content={post.content.rendered}
          />
        )}
      </div>
    );
  }
}

export default PostContainer;
