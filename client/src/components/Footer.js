import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer is-fixed-bottom">
            <div className="content has-text-centered">
                <p>
                    <strong>Gourmet Gauntlet</strong> by{' '}
                    <a href="https://github.com/daevidvo">David Vo</a>,{' '}
                    <a href="https://github.com/dchung13">David Chung</a>,{' '}
                    <a href="https://github.com/bryannguyen9">Bryan Nguyen</a>, and{' '}
                    <a href="https://github.com/jeppjeppjepp0">Jedd Javier</a>. The source code is licensed through
                    <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;

