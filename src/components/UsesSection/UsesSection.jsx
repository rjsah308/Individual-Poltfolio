import './UsesSection.css';
import PropTypes from 'prop-types';
import UseCard from '../UsesCard/UsesCard.jsx';

const UsesSection = ({ items }) => {
  return (
    <section className="uses-section">
      <div className="uses-section__content">
        {items.map((group, index) => (
          <div className="uses-section__group" key={index}>
            <h2 className="uses-section__group-heading">{group.groupName}</h2>
            <div className="uses-section__group-content">
              {group.items.map((item, i) => (
                <UseCard
                  key={i}
                  title={item.title}
                  content={item.description} // Assuming content is the new name
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string, // Ensure description is named correctly
        })
      ),
    })
  ),
};

export default UsesSection;
