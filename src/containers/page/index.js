// dependencies
import React from 'react';
import 'whatwg-fetch';

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    const dataURL = `//${window.location.hostname}/wp-json/wp/v2/pages/?slug=${this.props.params.slug}`;
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
          <article className="page">
            <h1 className="page__title" dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
            <section className="page__entry" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
          </article>
        )}
      </div>
    );
  }
}

export default Page;
