import PropTypes from 'prop-types';
import css from './profileStyles.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.userAvatar}
                />
                <p className={css.userName}>{username}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.userStats}>
                <li className={css.userStatsItem}>
                    <span className={css.userStatsItemLabel}>Followers</span>
                    <span className={css.userStatsItemNumber}>{stats.followers.toLocaleString('en-EN')}</span>
                </li>
                <li className={css.userStatsItem}>
                    <span className={css.userStatsItemLabel}>Views</span>
                    <span className={css.userStatsItemNumber}>{stats.views.toLocaleString('en-EN')}</span>
                </li>
                <li className={css.userStatsItem}>
                    <span className={css.userStatsItemLabel}>Likes</span>
                    <span className={css.userStatsItemNumber}>{stats.likes.toLocaleString('en-EN')}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};