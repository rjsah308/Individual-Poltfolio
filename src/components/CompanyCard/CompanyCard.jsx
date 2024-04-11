/* eslint-disable @next/next/no-img-element */
import './CompanyCard.css';
import PropTypes from 'prop-types';

const CompanyCard = ({ logo, name, description, link }) => {
  return (

    <div className="company-card">
      <div>
      <img src={logo} alt={`${name} Logo`} className="company-card-logo" />
      <h2 className="company-name">{name}</h2>
      </div>
      <div>
      <p className="company-description">{description}</p>
      <a href={link} className="company-link">Visit Website</a>
      </div>
    </div>
  );
};

CompanyCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CompanyCard;
