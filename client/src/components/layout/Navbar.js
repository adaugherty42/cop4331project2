import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <h1>
        <Link to='/dashboard'>
          <i class="fas fa-horse-head"/> KnightsSocial
        </Link>
      </h1>
    <ul className="nav navbar-nav">
      <li className="navbar-item">
        <Link to='/profile'>Profile</Link>
      </li>
      <li className="navbar-item">
        <Link to='/profiles'>View Knights</Link>
      </li>
      <li>
        <Link to='/posts'>View Posts</Link>
      </li>
      <li>
        <Link to='/create-post'>Create A Post</Link>
      </li>
      </ul>
      <ul className='nav navbar-nav navbar-right'>
        <li className='navbar-item'>
          <a onClick={logout} href='#!'>
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );

  const guestLinks = (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className="fas fa-horse-head"/> KnightsSocial
        </Link>
      </h1>
      <ul className='nav navbar-nav navbar-right'>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );

  return (
      !loading && 
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
