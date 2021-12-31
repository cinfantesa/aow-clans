import React, {Fragment, useEffect} from 'react'
import StatCards from './shared/StatCards'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import {loadSeasons} from '../../redux/actions/DashboardActions';
import {useDispatch, useSelector} from 'react-redux';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Analytics = () => {
    const dispatch = useDispatch();
    const lastSeason = useSelector(state => state.dashboard.lastSeason);

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
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
