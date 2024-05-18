import { Box, Title } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import { tables } from '~/models';
import { formatCurrency } from '~/utils';
import styles from './HtmlTables.module.scss';

export const HtmlTables = () => {
  return (
    <Box className={styles.root}>
      {tables.map(table => {
        return (
          <Box key={uuid()}>
            <Title order={2}>{table.name.toUpperCase()}</Title>

            <table>
              <thead>
                <tr>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {table.rows.map(row => {
                  return (
                    <tr key={uuid()}>
                      <td>{row.qty}</td>
                      <td>{formatCurrency(row.price)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
        );
      })}
    </Box>
  );
};
