import React, {Fragment, useEffect} from 'react'
import { Box, styled } from '@mui/system'
import DataTable from 'react-data-table-component';
import {loadSeasons} from '../../redux/actions/DashboardActions';
import {useDispatch, useSelector} from 'react-redux';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
}));

const rankingSortFunction = (rowA, rowB) => {
  const rankA = Number(rowA.rank);
  const rankB = Number(rowB.rank);

  if (rankA > rankB) {
    return 1;
  }

  if (rankB > rankA) {
    return -1;
  }

  return 0;
};
const nameSortFunction = (rowA, rowB) => {
  const rankA = rowA.name.toLowerCase();
  const rankB = rowB.name.toLowerCase();

  if (rankA > rankB) {
    return 1;
  }

  if (rankB > rankA) {
    return -1;
  }

  return 0;
};
const trophiesSortFunction = (rowA, rowB) => {
  const rankA = Number(rowA.trophies);
  const rankB = Number(rowB.trophies);

  if (rankA > rankB) {
    return 1;
  }

  if (rankB > rankA) {
    return -1;
  }

  return 0;
};

const columns = [
  {
    name: "Ranking",
    selector: row => row.rank,
    sortable: true,
    sortFunction: rankingSortFunction,
  },
  {
    name: "Id",
    selector: row => row.id,
  },
  {
    name: "Nombre",
    selector: row => row.name,
    sortable: true,
    sortFunction: nameSortFunction,
  },
  {
    name: "Copas",
    selector: row => row.trophies,
    sortable: true,
    sortFunction: trophiesSortFunction,
  },
  {
    name: "Clan",
    selector: row => row.clan,
    sortable: true,
  }
];

const Members= () => {
  const dispatch = useDispatch();
  const lastSeason = useSelector(state => state.dashboard.lastSeason);

  useEffect(() => {
    dispatch(loadSeasons());
  },[dispatch]);

  return (
    <Fragment>
      <ContentBox className="analytics">
      <Box width="100%" overflow="auto">
        <DataTable
          columns={columns}
          data={lastSeason.members}
          fixedHeader
        />
      </Box>
    </ContentBox>
  </Fragment>
  )
}

export default Members
