import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer is-fixed-bottom">
            <div className="content has-text-centered">
                <p>
                    <strong>Gourmet Gauntlet</strong> by{' '}
                    <a href="https://github.com/davidvo1995">David Vo</a>,{' '}
                    <a href="https://github.com/davidchungdev">David Chung</a>,{' '}
                    <a href="https://github.com/bryannguyen95">Bryan Nguyen</a>, and{' '}
                    <a href="https://github.com/jeddjavier">Jedd Javier</a>. The source code is licensed through
                    <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;

