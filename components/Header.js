import React from 'react';
import { Link, IndexLink } from 'react-router';
 
class Header extends React.Component {
  render() {
    let pages = {
      '/': 'Home Page',
      '/about': 'About Page'
    };

    let style = {
      float: 'left',
      marginRight: '1em',
    };

    return (
      <div>
        <h1>{pages[this.props.pathname]}</h1>
        <IndexLink to='/' style={style}>Home</IndexLink>
        <Link to='/about' style={style}>About</Link>
      </div>
    );
  }
}

export default Header;
