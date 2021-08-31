import PropTypes from "prop-types";
import { List, Item } from "./friends.styled.jsx";
import FriendListItem from "./friendsItem.jsx";

function FriendList({ friends }) {
  return (
    <List>
      {friends.map((item) => {
        const { name, avatar, isOnline, id } = item;

        return (
          <Item key={id}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </Item>
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
