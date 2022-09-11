import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import "./header.css";

function Header() {
  return (
    <div className="container-fluid bg-white position-relative">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <a href="index.html" className="navbar-brand text-secondary">
          <h1 className="display-4 text-uppercase">Welcome</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <Menu />
          <div className="d-none d-lg-flex align-items-center pl-4">
            <i className="fa fa-2x fa-mobile-alt text-primary mr-3"></i>
            <div>
              <h6 className="text-body text-uppercase mb-1">
                <small>Contact with me</small>
              </h6>
              <h6 className="m-0">email: hoannc0102@gmail.com</h6>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.facebook.com/hoan.hoai.3"
              >
                <h6 className="m-0 fb">
                  facebook: https://www.facebook.com/hoan.hoai.3
                </h6>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

function Menu() {
  const authenticated = useSelector(state => state.auth.isLogged)
  if (authenticated) {
    return (
      <div className="navbar-nav ml-auto py-0 pr-3 border-right">
        <Link to="/" className="nav-item nav-link active">
          Home
        </Link>
        <Link to="about" className="nav-item nav-link">
          About
        </Link>
        <a href="service.html" className="nav-item nav-link">
          Services
        </a>
        <a href="price.html" className="nav-item nav-link">
          Prices
        </a>
        <a href="project.html" className="nav-item nav-link">
          Projects
        </a>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
    );
  }
  return <div className="navbar-nav ml-auto py-0 pr-3 border-right"></div>;
}

export default Header;
