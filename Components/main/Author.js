import React from 'react';
import PropTypes from 'prop-types';

function Author({authorData}) {
  const {photo, name, workPlace, comment} = authorData;
  return (
    <div className="col card py-3 mb-4 author author__setting">
      <div className="d-flex align-items-center mb-4">
        <img src={photo} alt={name} className="d-inline-block rounded-circle mr-3 author__photo" />
        <div>
          <h6>{name}</h6>
          <span>{workPlace}</span>
        </div>
      </div>
      <blockquote className="text-secondary">{comment}</blockquote>
    </div>
  );
}
Author.propTypes = {
  authorData: PropTypes.object.isRequired,
};
export default Author;