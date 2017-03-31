// dependencies
import React from 'react';

// components
import Entry from '../entry';

const Page = props => (
  <article>
    <h1 dangerouslySetInnerHTML={{ __html: props.title }} />
    <Entry dangerouslySetInnerHTML={{ __html: props.content }} />
  </article>
);

export default Page;
