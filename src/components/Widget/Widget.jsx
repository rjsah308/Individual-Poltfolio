"use client";

import React, { useState } from 'react';
import './Widget.css';
import PropTypes from 'prop-types';

const Widget = ({ title, content, skills }) => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <section data-testid="Widget" className="skills-widget">
      <h2 data-testid="WidgetTitle">{title}</h2>
      <p data-testid="WidgetContent">{content}</p>
      <ul>
        {skills.map((item, index) => (
          <li key={index} data-testid={`WidgetItem${index}`}>
            <div className="Widget-item">
              <div className="Widget-item-content">
                <h3 data-testid={`WidgetItemName${index}`}>{item.name}</h3>
                <div className="skills-item-proficiency">
                  <div
                    data-testid={`WidgetItemProficiency${index}`}
                    className="proficiency-bar"
                    style={{ width: `${item.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
        />
        <br />
        <button type="submit">Join</button>
      </form>
    </section>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

Widget.defaultProps = {
  skills: [],
};

export default Widget;
