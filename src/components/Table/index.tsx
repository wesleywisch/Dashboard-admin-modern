import TableMui from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './styles.css';

export function Table() {
  function createData(
    name: string,
    trackingId: number,
    date: string,
    status: string,
  ) {
    return { name, trackingId, date, status };
  }

  function makeStyle(status: string) {
    if (status === 'Approved') {
      return {
        background: 'rgb(145, 254, 159)',
        color: 'green',
      }
    } else if (status === 'Pending') {
      return {
        background: '#ffadad8f',
        color: 'red',
      }
    } else {
      return {
        background: '#59bfff',
        color: '#fff',
      }
    }
  }

  const rows = [
    createData('Lasania Chiken Fri', 1847242, '2 March 2022', 'Approved'),
    createData('Big Baza Bang', 3746274, '2 March 2022', 'Pending'),
    createData('Mouth Freshner', 4324242, '2 March 2022', 'Approved'),
    createData('Cupcake', 7842104, '2 March 2022', 'Delivered'),
  ];

  return (
    <div className='tableContainer'>
      <h3>Recent orders</h3>

      <TableContainer component={Paper}
        style={{ boxShadow: '0rem 0.82rem 1.25rem #80808029' }}
      >
        <TableMui sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className='details'>Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMui>
      </TableContainer>
    </div>
  )
}