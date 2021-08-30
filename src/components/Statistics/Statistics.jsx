// import PropTypes from "prop-types";

// import { Card, } from "./Statistics.styled.jsx";

function Statistics(title, stats) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map((item) => {
          return (
            <li key={item.id}>
              <span class="label">{item.label}</span>
              <span class="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// SocialProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,

//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };

export default Statistics;
