import React from 'react'
import {Typography,Button,ButtonGroup,Container} from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
export default function Create() {
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
                <Button type="submit"  >Button</Button>
                <Button type="submit"   >Button</Button>
            </ButtonGroup>
            <AcUnitOutlinedIcon></AcUnitOutlinedIcon>
        </Container>
    )
}
