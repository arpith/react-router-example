import React from 'react';
import { Link, IndexLink } from 'react-router';
 
class Header extends React.Component {
  render() {
    let pages = {
      '/': 'Home Page',
      'about': 'About Page'
    };
    return (
      <div>
        <h1>{pages[this.props.pathname]}</h1>
        <IndexLink to='/'>Home</IndexLink>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}
export default Header;
