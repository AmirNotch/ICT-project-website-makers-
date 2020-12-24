import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

function Feedback({feedbackList}) {
  return (
    <React.Fragment>
      {
        feedbackList.map((item, index) => {
          const {id, imgSrc, title, desc, author} = item;
          if (index % 2 === 0) {
            return (
              <div className="row align-items-center feedback feedback_setting" key={id}>
                <div className="col-md-6 col-lg-7 mb-5 mb-md-0">
                  <img src={imgSrc} alt={'image ' + id} className="d-inline-block w-100" />
                </div>
                <div className="col-md-6 col-lg-5">
                  <h2 className="font-weight-bold mb-4 text-center text-md-left title">{title}</h2>
                  <p className="mb-5 text-secondary">{desc}</p>
                 <Author authorData={author} />
                </div>
              </div>
            );
          } else {
            return (
              <div className="row align-items-center feedback feedback_setting" key={id}>
                <div className="col-md-6 col-lg-5">
                  <h2 className="font-weight-bold mb-4 text-center text-md-left title">{title}</h2>
                  <p className="mb-5 text-secondary">{desc}</p>
                  <Author authorData={author} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <img src={imgSrc} alt={'image ' + id} className="d-inline-block w-100" />
                </div>
              </div>
            );
          }
        }) 
      }
    </React.Fragment>
  );
}

Feedback.propTypes = {
  feedbackList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Feedback;