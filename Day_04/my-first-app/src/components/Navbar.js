import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.part1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.part2}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}


Navbar.propTypes={
    title:PropTypes.string.isRequired,
    part1:PropTypes.string,
    part2:PropTypes.string
}