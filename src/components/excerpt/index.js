/**
 *   Post Excertpt Component
 * =============================================================================
 */

// components
import Button from '../button/button.js';
import ExcerptTitle from './title.js'
import ExcerptWrapper from './wrapper.js'

const Excerpt = props => (
  <ExcerptWrapper>
    <ExcerptTitle
      title={props.title}
      url={props.url} />
    <section dangerouslySetInnerHTML={{__html: props.excerpt}} />
    <Button to={props.url}>Read More</Button>
  </ExcerptWrapper>
)

export default Excerpt
