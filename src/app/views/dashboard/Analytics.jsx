import React, { Fragment } from 'react'
import StatCards from './shared/StatCards'
import { Grid, Card } from '@mui/material'
import DoughnutChart from './shared/Doughnut'
import { styled, useTheme } from '@mui/system'
import {loadMembers} from '../../redux/actions/DashboardActions';
import {useDispatch, useSelector} from 'react-redux';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))

let membersLoaded = false;

const Analytics = () => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const stats = useSelector(state => state.dashboard.stats);

    if (!membersLoaded) {
        dispatch(loadMembers());
        membersLoaded = true;
    }

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards
                          totalMembers={stats.totalMembers}
                          inactiveMembers={stats.inactiveMembers}
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card sx={{ px: 3, py: 2, mb: 3 }}>
                            <Title>Rangos</Title>
                            <SubTitle>Desde la última temporada</SubTitle>
                            <DoughnutChart
                                height="500px"
                                color={[
                                    palette.primary.dark,
                                    palette.primary.main,
                                    palette.primary.light,
                                ]}
                                godOfWar={stats.godOfWarMembers}
                                conqueror={stats.conquerorMembers}
                                king={stats.kingMembers}
                                diamond={stats.diamondMembers}
                                platinum={stats.platinumMembers}
                                gold={stats.goldMembers}
                                silver={stats.silverMembers}
                                bronze={stats.bronzeMembers}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
