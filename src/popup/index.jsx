import { globalRouters } from '@/popup/router'
import { RouterProvider } from 'react-router-dom'

function Popup() {
    return <RouterProvider router={globalRouters} />
}

export default Popup