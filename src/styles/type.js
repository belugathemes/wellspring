// dependencies
import { injectGlobal } from 'styled-components';

// styles
import { color, font, radius } from './theme';

const Type = injectGlobal`

  /* reset */
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, blockquote, pre {
    margin: 0;
    padding: 0;
  }
  /* vertical rhythm */
  p, ul, ol, blockquote, pre, address {
    margin-bottom: ${font.lineHeight}em;
  }

  /* headings */
  h1, h2, h3, h4, h5, h6 {
    color: ${color.black};
    font-family: ${font.family.light};
    font-weight: ${font.weight.light};
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
  h1 { font-size: 3.157em; }
  h2 { font-size: 2.369em; }
  h3 { font-size: 1.777em; }
  h4 { font-size: 1.333em; }
  h5 { font-size: 1em; }
  h6 { font-size: 0.75em; }

  /* link */
  a {
    color: ${color.primary};
    text-decoration: none;

    &:active, &:focus, &:hover {
      color: ${color.primaryDark};
      outline-width: 0;
    }
  }

  /* lists */
  ul, ol {
    list-style-position: inside;
    margin-left: 1.5em;

    & & {
      margin-left: 1em;
      margin-bottom: 0;
    }
  }

  /* text */
  b, strong { font-weight: ${font.weight.bold}; }
  small { font-size: 80%; }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub { bottom: -0.25em; }
  sup { top: -0.5em; }

  /* quotes */
  blockquote {
    color: ${color.grayDark};
    border-left: 3px solid ${color.gray};
    padding: 0.5em 1em 0.1em;

    &:before {
      content: "\u2014 \u00A0";
    }
  }

  /* preformatted, code */
  code, kbd, pre, samp {
    background: ${color.grayLight};
    border-radius: ${radius};
    color: ${color.black};
    font-family: ${font.family.mono};
    font-size: 1em;
    padding: 0.2em 0.5em;
  }
  pre {
    font-size: 0.875em;
    padding: 0.5em 1em;
  }
`;

export default Type;
