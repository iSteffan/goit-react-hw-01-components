import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<div className={css.profile}>
  <div>
    <img
      src={avatar}
      alt="User avatar"
      className={css.photo}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li className={css.item}>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};