import React from 'react';
import PropTypes  from 'prop-types';

export const Header = (props) => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/Ntrv3390" target="_blank" rel="noreferrer">Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://linkedin.com/in/mohammed-puthawala" target="_blank" rel="noreferrer">LinkedIN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://drive.google.com/file/d/10h-zSgSKMccO7-mLG7cv-_TVe7TKKMrI/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  ) 
}

export default Header;

Header.defaultProps = {
  title : "Enter title here",
}

Header.propTypes = {
    title: PropTypes.string
  };
