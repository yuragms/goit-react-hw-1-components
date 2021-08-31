import PropTypes from "prop-types";
import { Status, Avatar, Name } from "./friends.styled.jsx";

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
