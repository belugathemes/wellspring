/**
 * Post Excertpt
 */

// dependencies
import React from 'react';

// components
import Button from '../button';
import Title from './title';
import Wrapper from './wrapper';

const Excerpt = props => (
  <Wrapper>
    <Title
      title={props.title}
      url={props.url}
    />
    <section dangerouslySetInnerHTML={{ __html: props.excerpt }} />
    <Button to={props.url}>Read More</Button>
  </Wrapper>
);

export default Excerpt;
