import { Outlet } from "react-router-dom";
import SwiggyHeader from "./SHeader/swiggyHeader";

const SwiggyDashboard = () => {

    const handleScroll = () => {
        console.log("**********");
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

        if (scrollPercent >= 90) {
            console.log('You have scrolled 90% down the page!');
            // You can add any additional actions you want to perform here
        }
    }

    return (
        <div className="flex flex-col h-screen" onScroll={handleScroll}>
            <SwiggyHeader />
            <Outlet />
        </div>
    )
}

export default SwiggyDashboard;