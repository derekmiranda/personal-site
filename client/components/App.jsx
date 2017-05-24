import React, { Component } from 'react';
import { render } from 'react-dom';
import Section from './Section.jsx';

function App(props) {
  const sections = [
    {
      title: 'About',
      description: "I'm a full-stack software engineer that's interested in video and media technology as well as real-time applications but love any good challenge thrown my way!"
    },
    {
      title: 'Contact',
    },
  ].map(
    section => <Section
      title={section.title}
      description={section.description}
      key={section.title}
    />);

  return (
    <header>
      <h1>Derek Miranda</h1>
      <h2>Software Engineer</h2>
      {sections}
    </header>
  );
}

export default App;