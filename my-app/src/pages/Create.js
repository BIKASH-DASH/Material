import React from 'react'
import {Typography,Button,ButtonGroup,Container,makeStyles} from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
const useStyles = makeStyles({
    
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
            <ButtonGroup variant="contained" color="secondary">
                <Button type="submit" variant="contained" className={classes.btn}  >Button</Button>
                <Button type="submit"   >Button</Button>
            </ButtonGroup>
            <br />
            <AcUnitOutlinedIcon/>
            <br />
            <AcUnitOutlinedIcon color="secondary" fontSize="large" />
            <br />
            <AcUnitOutlinedIcon color="secondary" fontSize="small" />
            <br />
            <AcUnitOutlinedIcon color="error" fontSize="small" />
            <br />
            <AcUnitOutlinedIcon color="action" fontSize="small" />
            <br />
            <AcUnitOutlinedIcon color="disabled" fontSize="small" />
            <br />
            <AcUnitOutlinedIcon color="inherit" fontSize="small" />
        </Container>
    )
}
