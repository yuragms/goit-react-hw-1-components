import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
import {
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
} from "./profile.styled.jsx";

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
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatItem>
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
