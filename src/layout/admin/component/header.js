import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {

  const auth = useSelector((state) =>state.auth.auth.users.role)
    const decentralization = () => {
      if (auth === 0 || auth === 2 ) {
          return(
            <>
          <li className="nav-item">
            <Link to="/admin/cateadmin" className="nav-link">
              <i className="nav-icon fab fa-cuttlefish"></i>
              <p>
                Categories
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/prdadmin" className="nav-link">
              <i className="nav-icon fab fa-product-hunt"></i>
              <p>
                Products
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/admin/user" className="nav-link">
            <i className=" nav-icon fas fa-user"></i>
              <p>
                Users
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/admin/orderadmin" className="nav-link">
              <i className="nav-icon fas fa-shopping-cart"></i>
              <p>
                Orders
              </p>
            </Link>
           
          </li>
            </>
          )
      }else if (auth === 3) {
          return(
            <>
              <li className="nav-item">
            <Link to="/admin/cateadmin" className="nav-link">
              <i className="nav-icon fab fa-cuttlefish"></i>
              <p>
                Categories
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/admin/prdadmin" className="nav-link">
              <i className="nav-icon fab fa-product-hunt"></i>
              <p>
                Products
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
          </li>
            </>
          )
      }else{
        return(
          <li className="nav-item">
          <Link to="/admin/orderadmin" className="nav-link">
            <i className="nav-icon fas fa-shopping-cart"></i>
            <p>
              Orders
            </p>
          </Link>
         
        </li>
        )
      }
    }
  return (
            <>
              {/* Navbar */}
              <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></Link>
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    <Link to="index3.html" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    <Link to="#" className="nav-link">Contact</Link>
                  </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                  {/* Navbar Search */}
                  <li className="nav-item">
                    <Link className="nav-link" data-widget="navbar-search" to="#" role="button">
                      <i className="fas fa-search" />
                    </Link>
                    <div className="navbar-search-block">
                      <form className="form-inline">
                        <div className="input-group input-group-sm">
                          <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                          <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                              <i className="fas fa-search" />
                            </button>
                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                              <i className="fas fa-times" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Messages Dropdown Menu */}
                  <li className="nav-item dropdown ">
                    <Link className="nav-link" data-toggle="dropdown" to="#">
                      <i className="far fa-comments" />
                      <span className="badge badge-danger navbar-badge">3</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                      <Link to="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                          <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                          <div className="media-body">
                            <h3 className="dropdown-item-title">
                              Brad Diesel
                              <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                            </h3>
                            <p className="text-sm">Call me whenever you can...</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                          </div>
                        </div>
                        {/* Message End */}
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                          <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                          <div className="media-body">
                            <h3 className="dropdown-item-title">
                              John Pierce
                              <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                            </h3>
                            <p className="text-sm">I got your message bro</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                          </div>
                        </div>
                        {/* Message End */}
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                          <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                          <div className="media-body">
                            <h3 className="dropdown-item-title">
                              Nora Silvester
                              <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                            </h3>
                            <p className="text-sm">The subject goes here</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                          </div>
                        </div>
                        {/* Message End */}
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
                    </div>
                  </li>
                  {/* Notifications Dropdown Menu */}
                  <li className="nav-item dropdown">
                    <Link className="nav-link" data-toggle="dropdown" to="#">
                      <i className="far fa-bell" />
                      <span className="badge badge-warning navbar-badge">15</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                      <span className="dropdown-item dropdown-header">15 Notifications</span>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item">
                        <i className="fas fa-envelope mr-2" /> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item">
                        <i className="fas fa-users mr-2" /> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item">
                        <i className="fas fa-file mr-2" /> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
                      <i className="fas fa-expand-arrows-alt" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" to="#" role="button">
                      <i className="fas fa-th-large" />
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.navbar */}
              {/* Main Sidebar Container */}
              <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/" className="brand-link">
                  <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                  <span className="brand-text font-weight-light">AdminLTE 3</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                  {/* Sidebar user panel (optional) */}
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                      <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt={'...'} />
                    </div>
                    <div className="info">
                      <Link to="#" className="d-block">Alexander Pierce</Link>
                    </div>
                  </div>
                  {/* SidebarSearch Form */}
                  <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                      <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <button className="btn btn-sidebar">
                          <i className="fas fa-search fa-fw" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Menu */}
                  <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                      <li className="nav-item menu">
            <Link to="/admin" className="nav-link ">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </Link>
          </li>
                    {decentralization()}
                    </ul>
                  </nav>
                </div>
              </aside>
            </>
    );
}

export default Header;