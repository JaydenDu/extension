import Account from '@/popup/pages/account'
import Entry from '@/popup/pages/entry'
import Login from '@/popup/pages/login'
import { createHashRouter, Navigate } from 'react-router-dom'

// 全局路由
export const globalRouters = createHashRouter([
    {
        // 对精确匹配"/login"，跳转Login页面
        path: '/login',
        element: <Login />,
    },
    {
        // 未匹配"/login"，全部进入到entry路由
        path: '/',
        element: (
            <Entry />
        ),
        // 定义entry二级路由
        children: [
            {
                // 精确匹配"/home"，跳转Home页面
                path: '/home',
                
            },
            {
                // 精确匹配"/account"，跳转Account页面
                path: '/account',
                element: <Account />,
            },
            {
                // 如果URL没有"#路由"，跳转Home页面
                path: '/',
                element: <Navigate to="/home" />,
            },
            {
                // 未匹配，跳转Login页面
                path: '*',
                element: <Navigate to="/home" />,
            },
        ],
    },
])