// dependencies
import React from 'react';

// components
import Button from '../../components/button';

const Home = () => (
  <article className="home">
    <h1>Wellspring</h1>
    <p>
      WordPress theme build as a progressive web app.
      Optimized for high&ndash;speed performance and great user experience.
    </p>
    <Button to="/blog" contrast>Latest Posts</Button>
    <Button to="/about">About Us</Button>
  </article>
);

export default Home;
