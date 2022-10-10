import './Title.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return (
    <h1
      data-aos="fade-right"
      data-aos-duration="1050"
      className="title"
    >
      {title}

    </h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
