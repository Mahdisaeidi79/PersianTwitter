import { Divider } from '@material-ui/core'
import React from 'react'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import Rightsidebar from '../rightsidebar/Rightsidebar';
import useStyle from './style';


export default function Layout(props) {
    const classes = useStyle()
    return (
        <div className = {classes.root}>
            <Rightsidebar/>
            <Divider orientation ={"vertical"} className = {classes.divider} />
            <div className = {classes.container}>
                {props.children}
            </div>
            <Divider orientation ={"vertical"} className = {classes.divider} />
           <LeftSidebar/>
        </div>
        
    )
}
