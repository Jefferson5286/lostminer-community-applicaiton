import {RouteObject} from 'react-router'
import {Navigation} from '@toolpad/core'
import {HomeOutlined, CloudDownloadOutlined} from "@mui/icons-material"

import Gallery from '../screens/Gallery'

export const screens: RouteObject[] = [
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: '/gallery',
        Component: Gallery
    }
]

export const navigation: Navigation = [
    {segment: '', title: 'Home', icon: <HomeOutlined/>},
    {segment: 'gallery', title: 'Content Gallery', icon: <CloudDownloadOutlined/>},
]
