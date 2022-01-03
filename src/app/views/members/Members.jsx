import React, {Fragment, useEffect} from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'
import {loadSeasons} from '../../redux/actions/DashboardActions';
import {useDispatch, useSelector} from 'react-redux';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
}))
const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': {
      '& th': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  '& tbody': {
    '& tr': {
      '& td': {
        paddingLeft: 0,
        textTransform: 'capitalize',
      },
    },
  },
}))

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
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Copas</TableCell>
              <TableCell>Clan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lastSeason.members.map((member, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  {member.rank}
                </TableCell>
                <TableCell align="left">
                  {member.id}
                </TableCell>
                <TableCell align="left">
                  {member.name}
                </TableCell>
                <TableCell>{member.trophies}</TableCell>
                <TableCell>{member.clan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    </ContentBox>
  </Fragment>
  )
}

export default Members
