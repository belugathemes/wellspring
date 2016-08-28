/**
 *   Post Excertpt Component
 * =============================================================================
 */

const Excerpt = props => (
  <article className="excerpt">
    <h1 className="excerpt__title" dangerouslySetInnerHTML={{__html: props.title}} />
    <section className="excerpt__entry" dangerouslySetInnerHTML={{__html: props.excerpt}} />
  </article>
)

export default Excerpt
