import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

function Section(props) {
  return (
    <section>
      <h3>{ props.title }</h3>
      <article>{ props.description }</article>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Section;