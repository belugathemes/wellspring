/**
 *   Single Post Content Type
 * =============================================================================
 */

// import components
import Button from '../../components/button/button.jsx';

const Post = () => (
  <article className="post">
    <h1 className="post__title">Metamorphosis</h1>
    <p className="post__intro">
      One morning, as Gregor Samsa was waking up from anxious dreams,
      he discovered that in bed he had been changed into a monstrous verminous bug.
      He lay on his armour-hard back and saw, as he lifted his head up a little,
      his brown, arched abdomen divided up into rigid bow-like sections.
    </p>
    <p>
      From this height the blanket, just about ready to slide off completely, could hardly stay in place.
      His numerous legs, pitifully thin in comparison to the rest of his circumference,
      flickered helplessly before his eyes.
    </p>
    <section className="post__nav">
      <Button>Previous Post</Button>
      <Button>Next Post</Button>
    </section>
  </article>
)

export default Post
