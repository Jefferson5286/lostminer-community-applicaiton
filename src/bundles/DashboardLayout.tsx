import {ReactElement} from 'react'
import {DashboardLayout} from '@toolpad/core'
import {Outlet} from 'react-router'


export default function Layout(): ReactElement {
    return <DashboardLayout>
        <Outlet/>
    </DashboardLayout>
}