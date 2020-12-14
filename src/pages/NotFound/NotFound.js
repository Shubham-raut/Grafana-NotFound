import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <h1>Oops!</h1>
                <div className="notfound__content">
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    {/* <a href="#">Go To Homepage</a> */}
                    <Link exact to='/'>Go To Homepage</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;