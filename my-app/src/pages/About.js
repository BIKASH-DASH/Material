import React from 'react'
import {Grid,Paper,Container} from '@material-ui/core'
import NotesCard from '../components/NotesCard'
export default function About() {
    return (
        <Container>
        <Grid container>
                <NotesCard note={'hello'}/>
            <Grid item xs={12} sm={6} md={4}><Paper>lorem 1</Paper></Grid>
                <Grid item xs={12} sm={6} md={4}><Paper>lorem 2</Paper></Grid>
                <Grid item xs={12} md={4} ><Paper>lorem 3</Paper></Grid >
        </Grid>
        </Container>
    )
}
