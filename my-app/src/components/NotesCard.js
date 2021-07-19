import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, MoreVertIcon} from '@material-ui/core';
import { RemoveCircleOutline } from '@material-ui/icons';
export default function NotesCard({note},...props) {
    return (
        <div>
            <Card>
                <CardHeader action={
                    <IconButton aria-label="settings">
                        <RemoveCircleOutline/>
                    </IconButton>
                }/>
            </Card>
        </div>
    )
}
