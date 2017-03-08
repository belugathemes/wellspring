/**
 *   Post Excertpt :: Title
 */

// dependecies
import { Link } from 'react-router'
import styled from 'styled-components'

const Title = props => (
  <h2>
    <Link to={props.url}>{props.title}</Link>
  </h2>
)

export default Title
