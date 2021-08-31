import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  Tbody,
  Tr,
  Td,
} from "./TransactionHistory.styled.jsx";

function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <Tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Tr>
      </TableHead>

      <Tbody>
        {transactions.map((item) => {
          return (
            <Tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
