import React, {Fragment} from 'react'
import { Box, styled } from '@mui/system'
import DataTable from 'react-data-table-component';
import {useSelector} from 'react-redux';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
}));

const columns = [
  {
    name: "Ranking",
    selector: row => row.member.rank,
  },
  {
    name: "Id",
    selector: row => row.member.id,
  },
  {
    name: "Copas",
    selector: row => row.member.trophies,
  },
  {
    name: "Nombre",
    selector: row => row.member.name,
  },
  {
    name: "Clan",
    selector: row => row.member.clan,
    sortable: true,
  },
  {
    name: "Mover a",
    selector: row => row.targetClan,
    sortable: true,
  }
];

const Movements= () => {
  const movements = useSelector(state => state.dashboard.movements);

  return (
    <Fragment>
      <ContentBox className="analytics">
      <Box width="100%" overflow="auto">
        <DataTable
          columns={columns}
          data={movements}
          fixedHeader
        />
      </Box>
    </ContentBox>
  </Fragment>
  )
}

export default Movements
