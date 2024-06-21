import Nav from '@/popup/components/nav'
import { Outlet, useLocation } from 'react-router-dom'
import './entry.styl'

function Entry() {
    // 获取当前路由location
    const location = useLocation()

    return (
        <div className="M-entry">
            <Nav location={location} />
            <div className="main-container" style={{ width: '500px', height: '300px'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default Entry