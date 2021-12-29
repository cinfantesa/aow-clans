import React, { Fragment } from 'react'
import StatCards from './shared/StatCards'
import { Grid } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import {loadMembers} from '../../redux/actions/DashboardActions';
import {useDispatch, useSelector} from 'react-redux';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

let membersLoaded = false;

const Analytics = () => {
    const dispatch = useDispatch();
    const stats = useSelector(state => state.dashboard.stats);

    if (!membersLoaded) {
        dispatch(loadMembers());
        membersLoaded = true;
    }

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <StatCards
                          totalMembers={stats.totalMembers}
                          inactiveMembers={stats.inactiveMembers}
                          totalClans={stats.totalClans}
                        />
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
