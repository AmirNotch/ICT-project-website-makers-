import React from 'react'

// picture
import Logo from '../../images/undraw_bookmarks_r6up.svg'

function AboutUS() {
  const missionList = ['Laborum enim quasi at modi', 'Ad at tempore', 'Labore quaerat esse']
  return (
    <div className="row about">
      <div className="col-md-7 ">
        <img src={Logo} alt="our mission" className="d-inline-block w-100" />
      </div>
      <div className="col-md-5">
        <h3 className="text-capitalize text-center text-md-left mb-4 title">our mission</h3>
        <p className="text-secondary text-justify text-md-left mb-4">
          In today’s digital world, your website is the first interaction consumers have with your business.

That’s why more companies are not only reevaluating their website’s design but also partnering with WebisteMakers, the web design agency that’s driven more than $1 billion in revenue for its clients.
        </p>
        <ul className="mb-4">
          {missionList.map((item, index) => {
            return (
              <li className="text-secondary" key={index}>
                <i className="fas fa-check d-inline-block mr-3 text-success"></i>
                {item}
              </li>
            )
          })}
        </ul>
        <button className="btn btn-primary rounded text-capitalize">learn more</button>
      </div>
    </div>
  )
}

export default AboutUS
