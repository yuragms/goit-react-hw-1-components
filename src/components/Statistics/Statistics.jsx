import PropTypes from "prop-types";
import {
  Section,
  StatisticsList,
  StatisticsTitle,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled.jsx";

function Statistics({ title, stats }) {
  console.log(stats);
  return (
    <Section>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsList>
        {stats.map((item) => {
          return (
            <Item key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatisticsList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
