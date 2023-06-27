import React from "react";

function Footer() {
  return (
    <footer className={`footer is-fixed-bottom ${true ? "has-background-dark has-text-light" : ""}`}>
      <div className="content has-text-centered">
        <span>
          <p style={{ display: `inline` }}>
            <strong className={` ${true ? "has-text-light" : ""}`}>Gourmet Gauntlet</strong> by{" "}
          </p>
          <a
            href="https://github.com/daevidvo "
            target="_blank"
            rel="noreferrer"
          >
            David Vo,{" "}
          </a>
          <a
            href="https://github.com/dchung13 "
            target="_blank"
            rel="noreferrer"
          >
            David Chung,{" "}
          </a>
          <a
            href="https://github.com/bryannguyen9 "
            target="_blank"
            rel="noreferrer"
          >
            Bryan Nguyen,{" "}
          </a>
          <span>and </span>
          <a
            href="https://github.com/jeppjeppjepp0 "
            target="_blank"
            rel="noreferrer"
          >
            Jedd Javier.{" "}
          </a>
          <span>The source code is licensed through </span>
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
