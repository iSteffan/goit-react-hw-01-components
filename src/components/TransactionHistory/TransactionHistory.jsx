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
                {items.map(({id, type, amount, currency}) => (
                    <tr  className={css.row} key={id}>
                        <td  className={css.item}>{type}</td>
                        <td  className={css.item}>{amount}</td>
                        <td  className={css.item}>{currency}</td>
                    </tr>))}

                </tbody>
            </table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};
