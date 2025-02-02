import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './app.tsx'
import {CssBaseline} from '@mui/material'
import {RouterProvider, createBrowserRouter} from 'react-router'
import Layout from './bundles/DashboardLayout'
import {screens} from './bundles/managers/screen.tsx'


const router = createBrowserRouter([
    {
        Component: App,
        children: [{
            Component: Layout,
            path: '/',
            children: screens
        }]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CssBaseline/>
      <RouterProvider router={router}/>
  </StrictMode>
)
