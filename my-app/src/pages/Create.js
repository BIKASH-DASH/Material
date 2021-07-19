import React from 'react'
import { Typography, Button, ButtonGroup, Container, makeStyles, TextField } from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';

const useStyles = makeStyles({
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block'
    }
    
})
export default function Create() {
    const classes = useStyles();
    return (
        <Container>

            <Typography variant="h6" component="h2" gutterBottom="" color='textSecondary' >Create Page</Typography>
            <Typography 
            color="secondary"
            noWrap
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias odit, ipsum minima ea explicabo quas voluptatum libero quod, beatae cum hic dolore enim maxime consequatur. Aliquam non est pariatur.
            </Typography>
            <form noValidate autoComplete="off" action="">
                <TextField
                    className={classes.field}
                label="note Title"
                variant="filled"
                color="secondary"
                fullWidth
                require
                />

                <TextField
                    className={classes.field}
                    label="note Details"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    require
                />
            </form>
        </Container>
    )
}
