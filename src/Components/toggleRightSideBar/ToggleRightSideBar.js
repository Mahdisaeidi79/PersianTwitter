import { Drawer } from '@material-ui/core'
import React from 'react'
import { ToggleSide, useLayoutDispatch, useLayoutState } from '../../context/LayoutContext';
import Rightsidebar from '../rightsidebar/Rightsidebar'

export default function ToggleRightSideBar() {
    const {ToggleSideOpen} = useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    return (
        <Drawer anchor={'right'} open={ToggleSideOpen} onClose={() => {ToggleSide(layoutDispatch)}}>
            <Rightsidebar />
        </Drawer>
    )
}
