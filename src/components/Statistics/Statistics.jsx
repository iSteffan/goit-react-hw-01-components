import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
    <section className={css.section}>
            
        {title && (<h2>{title}</h2>)}
  
        <ul className={css.stats}>
            {stats.map(stat => (
            <li className={css.item} key={stat.id}>
                <span>{stat.label}</span>
                <span>{stat.percentage}%</span>
            </li>
            ))}
        </ul>
    </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};