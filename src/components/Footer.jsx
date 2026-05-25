import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-white/5 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Dev.Future. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
