import {ReactElement} from 'react'

import {createTheme, Theme} from '@mui/material'

import {Outlet} from 'react-router'
import {ReactRouterAppProvider} from '@toolpad/core/react-router'

import {navigation} from './bundles/managers/screen.tsx'

const theme: Theme = createTheme({
    palette: {mode: 'dark'}
})

export default function App(): ReactElement {
    return <ReactRouterAppProvider theme={theme} navigation={navigation}>
        <Outlet/>
    </ReactRouterAppProvider>
}