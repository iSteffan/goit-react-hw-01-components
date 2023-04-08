import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList = ({ friends } ) => {
    return (
        <ul className={css.list}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <li className={css.item} key={id}>
                    {isOnline ?
                        (<span className={css.online}></span>) :
                        (<span className={css.offline}></span>)}
                    <img className={css.img} src={avatar} alt="User avatar" width="48" />
                    <p>{name}</p>
                </li>))}
        </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
};
