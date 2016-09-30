/**
 *   Home Page Container
 * =============================================================================
 */

// fetch polyfill
import 'whatwg-fetch';

// components
import Button from '../../components/button/button.js';

const Home = () => (
  <article className="home">
    <h1>Wellspring</h1>
    <p>
      WordPress theme build as a progressive web app.
      Otimized for high&ndash;speed performance and great user experience.
    </p>
    <Button>Home Page Action</Button>
  </article>
)

export default Home
