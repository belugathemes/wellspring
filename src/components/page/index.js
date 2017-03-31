// dependencies
import React from 'react';

// components
import PageContent from './page-content';

const Page = props => (
  <article>
    <h2 dangerouslySetInnerHTML={{ __html: props.title }} />
    <PageContent dangerouslySetInnerHTML={{ __html: props.content }} />
  </article>
);

export default Page;
