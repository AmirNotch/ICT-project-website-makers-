import React from 'react'
import PropTypes from 'prop-types'

function Features({ featuresList }) {
  return (
    <React.Fragment>
      {featuresList.map((item) => {
        return (
          <div className="col-sm-6 col-md-4 features features_setting" key={item.id}>
            <div className="text-center rounded h-100 features__inner-box">
              <span className="d-inline-flex justify-content-center align-items-center bg-primary rounded-circle features__logo">
                {item.icon}
              </span>
              <h4 className="text-capitalize mb-3 features__title">{item.title}</h4>
              <p className="text-secondary mb-3 features__desc">{item.desc}</p>
              <a href={item.link} className="text-capitalize text-primary features__link">
                learn more
              </a>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
Features.propTypes = {
  featuresList: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Features
