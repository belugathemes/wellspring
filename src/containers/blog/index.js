// dependencies
import React from 'react';
import 'whatwg-fetch';

// components
import Excerpt from '../../components/excerpt';
import Grid from './grid';
import GridCell from './grid-cell';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    const dataURL = `//${window.location.hostname}/wp-json/wp/v2/posts?filter[posts_per_page]=6`;
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
      <Grid>
        {this.state.data.map(post =>
          <GridCell>
            <Excerpt
              key={post.id}
              title={post.title.rendered}
              url={post.link}
              excerpt={post.excerpt.rendered}
            />
          </GridCell>
        )}
      </Grid>
    );
  }
}

export default Blog;
