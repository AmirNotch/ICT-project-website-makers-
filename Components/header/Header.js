import React from 'react'
function Header() {
  return (
    <header className="header header__setting" id="home">
      <div className="container">
        <div className="row align-items-center header__row">
          <div className="col-md-6 text-center text-sm-left py-4 py-md-0 header__box">
            <h1 className="font-weight-bold text-capitalize mb-4 title header__title">
              Welcome to WebisteMakers
            </h1>
            <p className="mb-5 text-secondary header__desc">
              Our approach to web design is to bring marketing and online success to your business.
            </p>
            <button className="btn btn-primary text-capitalize">get started</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
