// dependencies
import React from 'react';

// components
import Page from '../../components/page';

class PageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    const dataURL = `//${window.location.hostname}/wp-json/wp/v2/pages/?slug=${this.props.match.params.slug}`;
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
        {this.state.data.map(page =>
          <Page
            key={page.id}
            title={page.title.rendered}
            content={page.content.rendered}
          />
        )}
      </div>
    );
  }
}

export default PageContainer;
