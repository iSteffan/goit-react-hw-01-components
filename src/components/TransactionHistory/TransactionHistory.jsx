import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => {
    return (<table  className={css.table}>
                <thead  className={css.head}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                {items.map(item => (
                    <tr  className={css.row} key={item.id}>
                        <td  className={css.item}>{item.type}</td>
                        <td  className={css.item}>{item.amount}</td>
                        <td  className={css.item}>{item.currency}</td>
                    </tr>))}

                </tbody>
            </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};