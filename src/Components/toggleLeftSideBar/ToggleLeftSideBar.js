import { Drawer } from '@material-ui/core'
import React from 'react'
import { ToggleLeftSide, useLayoutDispatch, useLayoutState } from '../../context/LayoutContext';
import LeftSidebar from '../leftSidebar/LeftSidebar';


export default function ToggleRightSideBar() {
    const {ToggleLeftSideOpen} = useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    return (
        <Drawer anchor={'left'} open={ToggleLeftSideOpen} onClose={() => {ToggleLeftSide(layoutDispatch)}}>
            <LeftSidebar />
        </Drawer>
    )
}
