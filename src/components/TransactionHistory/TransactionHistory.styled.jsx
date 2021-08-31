import styled from "@emotion/styled";

const Table = styled.table`
  margin-top: 100px;

  width: 800px;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 2px 3px 2px rgba(128, 128, 128, 0.3);
`;

const TableHead = styled.thead`
  color: white;
  text-transform: uppercase;

  & th {
    border: 1px solid #ffdeff;
    padding: 20px;
    background-color: #00bcd5;
  }
`;
const Tbody = styled.tbody`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const Tr = styled.tr`
  background-color: white;
  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;

const Td = styled.td`
  padding: 20px;
  text-align: center;
  border: 1px solid #e4e9f0;
`;

export { Table, TableHead, Tbody, Tr, Td };
