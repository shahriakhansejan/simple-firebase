import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>LogIn</Link>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;