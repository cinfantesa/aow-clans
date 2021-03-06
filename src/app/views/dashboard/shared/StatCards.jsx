import React from 'react'
import { Grid, Card, Icon } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.primary.main,
}))

const StatCards = ({totalMembers, inactiveMembers, totalClans}) => {
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <Icon className="icon">group</Icon>
                        <Box ml="12px">
                            <Small>Número de miembros</Small>
                            <Heading>{totalMembers}</Heading>
                        </Box>
                    </ContentBox>
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <Icon className="icon">group</Icon>
                        <Box ml="12px">
                            <Small sx={{ lineHeight: 1 }}>
                                Miembros inactivos
                            </Small>
                            <Heading>{inactiveMembers}</Heading>
                        </Box>
                    </ContentBox>
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <Icon className="icon">group</Icon>
                        <Box ml="12px">
                            <Small sx={{ lineHeight: 1 }}>
                                Número de clanes
                            </Small>
                            <Heading>{totalClans}</Heading>
                        </Box>
                    </ContentBox>
                </StyledCard>
            </Grid>
        </Grid>
    )
}

export default StatCards
