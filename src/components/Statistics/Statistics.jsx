import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
    <section className={css.section}>
            
        {title && (<h2>{title}</h2>)}
  
        <ul className={css.stats}>
            {stats.map(({id, label, percentage}) => (
            <li className={css.item} key={id}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </li>
            ))}
        </ul>
    </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.number.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//     })),
// };