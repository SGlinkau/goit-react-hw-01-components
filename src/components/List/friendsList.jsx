import PropTypes from 'prop-types';
import css from './friendsStyles.module.css'

export const FriendsList = ({ friends }) => {
    return (
        <section>
        <ul className={css.list}>
            {friends.length > 0 &&
                friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className={css.item}>
                <span className={isOnline ? css.online : css.offline}></span>
                <img className={css.avatarImg} src={avatar} alt="User avatar" width="48" />
                <p className={css.friendName}>{name}</p>
            </li>
            ))}
        </ul>
        </section>
    );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};