import "./index.css";
import Ganesh from "../../../assets/images/Ganesh";

const AppSidebar = () => {
  return (
    <div className="flex flex-col relative z-40 left-0 top-0 lg:translate-x-0 transform h-full overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-20 w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 motion-reduce:transition-none dark:border-zinc-800 border-zinc-200 border-r p-4 transition-all duration-200 ease-in-out -translate-x-64 bg-black">
      <div className="w-full cursor-pointer px-3 py-5">
        <img alt />
        <span className="text-[26px] fire font-effect-fire">Ganesh V</span>
      </div>
      <div>
        <button className="w-full cursor-pointer px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all ease-out duration-300 hover:bg-dark_40">
          <div className="block text-gray-200 hover:text-white truncate transition duration-150 false">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 h-6 w-6">
                <path className="text-gray-400 false" strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-black-900 text-[15px] font-medium ml-2  lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 false">My Profile</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AppSidebar;