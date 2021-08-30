import styled from "@emotion/styled";

const Card = styled.div`
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 0 2px 1px rgba(128, 128, 128, 0.2);
  font-family: Roboto, sans-serif;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const Avatar = styled.img`
  margin-bottom: 24px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid grey;
`;

const Name = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
`;

const Tag = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  color: #a1abb6;
`;

const Location = styled.p`
  margin: 0;
  font-size: 14px;
  color: #a1abb6;
`;

const StatsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f3f6f8;
`;

const StatItem = styled.li`
  width: 100%;
  padding: 15px 5px;
  border: 1px solid #e4e9f0;
`;

const Label = styled.span`
  display: block;
  font-size: 14px;
  color: #a1abb6;
  text-align: center;
  margin-bottom: 10px;
`;

const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export {
  Card,
  Description,
  Avatar,
  StatsList,
  Name,
  Tag,
  Location,
  StatItem,
  Label,
  Quantity,
};
