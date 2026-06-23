import { Outlet } from 'react-router'
import Sidebar from './compnent/Sidebar'
import "./Layout.css";

function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout