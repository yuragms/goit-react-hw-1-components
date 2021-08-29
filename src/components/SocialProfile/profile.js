import defaultImage from "./default.jpg";

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
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
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
      </ul>
    </div>
  );
}

export default SocialProfile;
