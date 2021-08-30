import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
import { Card, Description, Avatar, StatsList } from "./profile.styled.jsx";

function SocialProfile({
  name = "неизвестено",
  tag = "неизвестено",
  location = "неизвестено",
  avatar = defaultImage,
  stats: {
    followers = "неизвестено",
    views = "неизвестено",
    likes = "неизвестено",
  },
}) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={name} />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <StatsList>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </StatsList>
    </Card>
  );
}

SocialProfile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default SocialProfile;
