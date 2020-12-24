import React, { useState } from 'react'

export default function TopMain() {
  const [mainToggle, setMainToggle] = useState('')

  // RENDER
  return (
    <nav
      className="nav header-fixed"
      data-scroll-moveup="true"
      data-background="#fff"
      data-box-shadow="4px 0 20px -10px rgba(0, 0, 0, 0.2)"
      style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 99 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-3 col-xl-4">
            <h3>
              <a href="/" className="d-inline-block py-2">
                WebisteMakers<span className="text-primary">.</span>
              </a>
            </h3>
          </div>
          <div className="col-6 col-md-9 col-xl-8 d-flex justify-content-end">
            <ul
              className={`d-flex flex-column flex-md-row justify-content-center justify-content-md-between nav__list  ${mainToggle}`}
            >
              {/* nav close button */}
              <div
                onClick={() => setMainToggle('')}
                className="d-flex align-items-center justify-content-center d-md-none text-dark nav__close"
              >
                <i className="fas fa-times"></i>
              </div>

              <li>
                <a className="d-flex align-items-center justify-content-center text-capitalize nav__links" href="#home">
                  home
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center justify-content-center text-capitalize nav__links"
                  href="#featurs"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center justify-content-center text-capitalize nav__links"
                  href="#aboutUs"
                >
                  about us
                </a>
                
              </li>
              <li>
                <a
                  className="d-flex align-items-center justify-content-center text-capitalize nav__links"
                  href="#aboutUs"
                >
                  Portfolio
                </a>
                
              </li>

              <li>
                <a
                  className="d-flex align-items-center justify-content-center text-capitalize nav__links"
                  href="#ourWorkers"
                >
                  Our workers
                </a>
              </li>
            </ul>
            {/* nav open button */}
            <div onClick={() => setMainToggle('nav__list-toggle')} className="d-inline-block d-md-none nav__open">
              <i className="fas fa-bars text-secondary"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
