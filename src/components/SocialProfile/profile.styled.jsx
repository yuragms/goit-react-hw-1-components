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

const StatsList = styled.ul`
  display: flex;
  list-style: none;
`;

export { Card, Description, Avatar, StatsList };
