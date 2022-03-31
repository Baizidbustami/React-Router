import React from 'react';
// import { Link } from 'react-router-dom';

import CustomLink from '../CustomLink/CustomLink';
import NotFund from '../NotFound/NotFund';

const Header = () => {
    return (
        <div>
            <h1 style={{color:"red"}}>Welcome to my fancy Routing Website!!!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='*'element = {<NotFund></NotFund>}> </CustomLink>
            </nav>
        </div>
    );
};

export default Header;