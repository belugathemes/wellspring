/**
 * Base Styles
 */

// dependencies
import { injectGlobal } from 'styled-components';

// styles
import { color, font } from './theme';

const Base = injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *, :after, :before {
    box-sizing: inherit;
  }

  body {
    background: ${color.white};
    color: ${color.blackLight};
    display: flex;
    flex-direction: column;
    font-family: ${font.family.base};
    font-size: 1rem;
    font-weight: ${font.weight.normal};
    line-height: ${font.lineHeight};
    margin: 0;
    min-height: 100vh;
    padding: 0;
    text-rendering: optimizeLegibility;

    @media (min-width: 545px) {
      font-size: 1.125rem;
    }

    @media (min-width: 685px) {
      font-size: 1.25rem;
    }

    @media (min-width: 837px) {
      font-size: 1.375rem;
    }
  }

  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    -ms-interpolation-mode: bicubic;
  }
`;

export default Base;
