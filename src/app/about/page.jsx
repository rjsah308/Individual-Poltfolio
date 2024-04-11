/* eslint-disable @next/next/no-img-element */
import React from "react";
import './page2.css';

export const metadata = {

  title: 'Portfolio - About',
  description: 'The About page of my portfolio.',
}

const About = () => {
  return (
    <div className="container-mx-auto">
      <h1>About Me</h1>
      <img src="/GM.jpg" alt="Gunmo Kim" />
      <p >
I'm Gunmo Kim, a dedicated developer with a love for both fashion and exercise. It's been two years since I arrived in the United States, and at 26 years old, I'm pursuing my passion for coding. During my time at Ensign College, I delved into Java and JavaScript, honing my skills and fueling my ambition to become a Web Developer. My commitment and knack for picking up new ideas quickly have me thrilled at the prospect of diving deeper into the realm of computer science.{" "}
      </p>
      {/* Add more content about yourself */}
    </div>
  );
};

export default About;
