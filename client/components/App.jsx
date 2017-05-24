import React, { Component } from 'react';
import { render } from 'react-dom';
// import Section from './Section.jsx';

function App(props) {
  // const sections = [
  //   {
  //     title: 'About',
  //     description: "I'm a full-stack software engineer that's interested in video and media technology as well as real-time applications but love any good challenge thrown my way!"
  //   },
  //   {
  //     title: 'Contact',
  //   },
  // ].map(
  //   section => <Section
  //     title={section.title}
  //     description={section.description}
  //     key={section.title}
  //   />);

  return (
    <header>
      <h1>Derek Miranda</h1>
      <h2>Software Engineer</h2>
      <section>
        <h3>About</h3>
        <article>I'm a full-stack software engineer that's interested in video and media technology as well as real-time applications but love any good challenge thrown my way!</article>
      </section>
      <section>
        <h3>
          <a href="/derek-miranda-resume.pdf">Resume</a>
        </h3>
      </section>
      <section>
        <h3>
          <a href="https://www.linkedin.com/in/dlmiranda/">LinkedIn</a>
        </h3>
      </section>
      <section>
        <h3>
          <a href="https://angel.co/derek-miranda">AngelList</a>
        </h3>
      </section>
      <section>
        <h3>
          <a href="mailto:derek.miranda.1992@gmail.com">Email</a>
        </h3>
      </section>
    </header>
  );
}

export default App;