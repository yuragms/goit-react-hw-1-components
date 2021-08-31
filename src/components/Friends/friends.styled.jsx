import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  list-style: none;
  margin-top: 100px;
  padding: 0;
  background-color: #f3f6f8;
  width: 450px;
  gap: 14px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 110px;
  padding: 8px 16px;
  background-color: #f3f6f8;
  box-shadow: 0 2px 3px 3px rgba(128, 128, 128, 0.2);
`;

const Status = styled.span`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: ${(props) => {
    if (props.isOnline) {
      return "green";
    }
    return "red";
  }};

  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 8px;
  margin-right: 15px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export { List, Item, Status, Avatar, Name };
