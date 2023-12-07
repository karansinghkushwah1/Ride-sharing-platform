import React from 'react';
import { styled } from '@mui/material';

const Component = styled('footer')`
    background: black;
    color: white;
    padding: 10px 0;
    text-align: center;
`;

const Footer = () => {
    return (
        <Component>
            <p>&copy; {new Date().getFullYear()} MoveInSync. All rights reserved.</p>
        </Component>
    );
}

export default Footer;
