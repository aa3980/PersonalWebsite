import React from "react"
import { Link } from "gatsby"
import App from './App';


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ textShadow: `none`, textDecoration: `none`, color: '#00000'}} to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 700, padding: `1.00rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration:`none` }}>
        <h3 style={{ display: `inline` }}>Ajit Akole</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
    <footer>
      <div align = "center">
        <App />
        <font size = "2">
        Built using react
        </font>
      </div>
  </footer>
  </div>
)