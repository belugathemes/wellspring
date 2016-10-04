/**
 *   Post Excertpt Component
 * =============================================================================
 */
import { Link } from 'react-router'

const Excerpt = props => (
  <article className="excerpt">
    <h2 className="excerpt__title">
      <Link to={props.url}>{props.title}</Link>
    </h2>
    <section className="excerpt__entry" dangerouslySetInnerHTML={{__html: props.excerpt}} />
  </article>
)

export default Excerpt
