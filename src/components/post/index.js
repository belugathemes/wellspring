// dependencies
import React from 'react';

// components
import Button from '../button';
import Entry from '../entry';

const Post = props => (
  <div>
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
      <Entry dangerouslySetInnerHTML={{ __html: props.content }} />
    </article>
    <section>
      <Button to="#">Previous Post</Button>
      <Button to="#">Next Post</Button>
    </section>
  </div>
);

export default Post;
