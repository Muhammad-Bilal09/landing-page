import React from 'react'

export default function SecondHeader() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand " style={{fontWeight:"bolder"}} href="#">Landing Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/blogs">blogs</a>
        </li><li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li><li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/services">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-5" aria-current="page" href="/contact">contact</a>
        </li>
        <li className="nav-item">
        <button className="btn btn-outline-danger me-4" type="submit">Buy now</button>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
