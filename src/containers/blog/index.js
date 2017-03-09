/**
 * Blog Page
 */

// dependencies
import React from 'react';
import 'whatwg-fetch';

// components
import Excerpt from '../../components/excerpt';
import Grid from './grid.js';
import GridCell from './grid-cell.js';

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
      <Grid>
        {this.state.data.map((post) =>
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
