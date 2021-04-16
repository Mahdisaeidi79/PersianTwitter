import { Divider } from '@material-ui/core'
import React from 'react'
import LeftSidebar from '../leftSidebar/LeftSidebar'
import Rightsidebar from '../rightsidebar/Rightsidebar'
import useStyle from './style'

export default function Layout() {
    const classes = useStyle()
    return (
        <div className = {classes.root}>
            <Rightsidebar/>
            <Divider orientation ={"vertical"} className = {classes.divider} />
            <div className = {classes.middle}>
                middle
            </div>
            <Divider orientation ={"vertical"} className = {classes.divider} />
           <LeftSidebar/>
        </div>
        
    )
}
