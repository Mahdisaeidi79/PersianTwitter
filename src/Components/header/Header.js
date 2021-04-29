import React from 'react'
import { Typography } from '@material-ui/core';
import useStyle from './style'

export default function Header({title,icon}) {
    var classes = useStyle()
    return (
        <div className={classes.header}>
                {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
        </div>
    )
}
