/**
 *   Page Container
 * =============================================================================
 */

// fetch polyfill
import 'whatwg-fetch';

// components
// import Button from '../../components/button/button.js';

class Page extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // fetch latest posts
    fetch('//' + window.location.hostname + '/wp-json/wp/v2/pages/?slug=' + this.props.params.slug)
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
      <div>
        {this.state.data.map((page) =>
          <article className="page">
            <h1 className="page__title" dangerouslySetInnerHTML={{__html: page.title.rendered}} />
            <section className="page__entry" dangerouslySetInnerHTML={{__html: page.content.rendered}} />
          </article>
        )}
      </div>
    );
  }
}

export default Page
