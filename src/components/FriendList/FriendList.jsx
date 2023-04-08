import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList = ({ friends } ) => {
    return (
        <ul className={css.list}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    {friend.isOnline ?
                        (<span className={css.online}></span>) :
                        (<span className={css.offline}></span>)}
                    <img className={css.img} src={friend.avatar} alt="User avatar" width="48" />
                    <p>{friend.name}</p>
                </li>))}
        </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};