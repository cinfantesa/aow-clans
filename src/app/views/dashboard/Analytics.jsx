import React, {Fragment, useEffect} from 'react'
import StatCards from './shared/StatCards'
import { Grid } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import {loadSeasons} from '../../redux/actions/DashboardActions';
import {useDispatch, useSelector} from 'react-redux';
import LineChart from './shared/LineChart';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Analytics = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const lastSeason = useSelector(state => state.dashboard.lastSeason);
    const stats = useSelector(state => state.dashboard.stats);

    useEffect(() => {
        dispatch(loadSeasons());
    },[dispatch]);


    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <StatCards
                          totalMembers={lastSeason.totalMembers}
                          inactiveMembers={lastSeason.totalInactiveMembers}
                          totalClans={lastSeason.totalClans}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <LineChart
                          height="350px"
                          color={[
                              theme.palette.primary.main,
                              theme.palette.primary.light,
                              theme.palette.secondary.main,
                          ]}
                          seasons={stats.seasonNames}
                          godOfWar={stats.gowBySeason}
                          members={stats.membersBySeason}
                          inactive={stats.inactiveMembersBySeason}
                        />
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
