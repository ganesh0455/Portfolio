import { Outlet } from "react-router-dom";
import AppSidebar from "../AppBody/AppSidebar";
import AppHeader from "../AppHeader";
import { useState } from "react";

const MainDashboard = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className='h-screen flex flex-col overflow-hidden'>
            <AppHeader toggleSidebar={toggleSidebar} />
            <div className='flex h-full'>
                {showSidebar && <AppSidebar />}
                <Outlet />
            </div>
        </div>
    )
}

export default MainDashboard;