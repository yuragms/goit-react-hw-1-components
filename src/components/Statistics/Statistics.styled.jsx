import styled from "@emotion/styled";

const Section = styled.section`
  border-radius: 5px;
  display: inline-block;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 0 2px 1px rgba(128, 128, 128, 0.2);
  font-family: Roboto, sans-serif;
  margin-top: 100px;
`;

const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f3f6f8;
`;

const StatisticsTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  max-width: 100%;
  padding: 30px 80px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 64px;
  padding: 15px 5px;
  color: white;
  &:nth-of-type(4n + 1) {
    background-color: #50c4f3;
  }
  &:nth-of-type(4n + 2) {
    background-color: #a43cf3;
  }
  &:nth-of-type(4n + 3) {
    background-color: #e64c66;
  }
  &:nth-of-type(4n + 4) {
    background-color: #20b8c5;
  }
`;

const Label = styled.span`
  text-align: center;
  margin-bottom: 10px;
  font-size: 12px;
`;

const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export { Section, StatisticsList, StatisticsTitle, Item, Label, Percentage };
