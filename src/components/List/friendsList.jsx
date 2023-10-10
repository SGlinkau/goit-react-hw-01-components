import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
    return (
        <section>
        <ul class="friend-list">
            {friends.length > 0 &&
                friends.map(({ id, avatar, name, isOnline }) => (
            <li class="item">
                <span class="status"></span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
            </li>
            ))}
        </ul>
        </section>
    );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};