import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main'
import { Children, Component } from 'react'
import Home from '../pages/home'

const router = [
    {
        path: '/',
        Component: Main,
        children: [
            {
                path: 'home',
                Component: Home
            }
        ]
    }
]

export default createBrowserRouter(router)