import { useNavigate } from "react-router-dom";

import "./index.css";
import { Link } from "react-router-dom";
import { profileDetails } from "../../../assets/Constants/profiles";

const AppSidebar = () => {
  const navigate = useNavigate();
  const { name } = profileDetails;

  const handleName = () => {
    navigate("/motivation");
  }

  return (
    <div className="flex flex-col relative z-40 left-0 top-0 lg:translate-x-0 transform h-full overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-20 w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 motion-reduce:transition-none dark:border-zinc-800 border-zinc-200 border-r p-4 transition-all duration-200 ease-in-out -translate-x-64 bg-black">
      <div className="w-full cursor-pointer py-5 flex gap-6" onClick={handleName}>
        {/* <img className="w-10 h-10 rounded-full" src={Ganesh} alt="profile-pic" /> */}
        <span className="text-[26px] fire font-effect-fire m-auto">{name}</span>
      </div>
      <div>
        <button className="w-full cursor-pointer px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all ease-out duration-300 hover:bg-gray-900">
          <div className="block text-gray-200 hover:text-white truncate transition duration-150 false">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 h-6 w-6">
                <path className="text-gray-400 false" strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <Link to="/motivation" className="text-black-900 text-[15px] font-medium ml-2  lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 false">Home</Link>
            </div>
          </div>
        </button>
        <div className="px-2 py-2 rounded-sm mb-0.5 last:mb-0 mt-3">
          <button className="py-2 w-full block text-gray-200 hover:text-white truncate px-[6px] transition-all ease-in-out duration-300">
            <div className="flex items-center justify-between ">
              <div className="flex items-center ">
                {/* <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H11M5 3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3M5 3C5 3.53043 5.21071 4.03914 5.58579 4.41421C5.96086 4.78929 6.46957 5 7 5H9C9.53043 5 10.0391 4.78929 10.4142 4.41421C10.7893 4.03914 11 3.53043 11 3" className="stroke-gray-400 !stroke-orange-600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg> */}
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H11M5 3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3M5 3C5 3.53043 5.21071 4.03914 5.58579 4.41421C5.96086 4.78929 6.46957 5 7 5H9C9.53043 5 10.0391 4.78929 10.4142 4.41421C10.7893 4.03914 11 3.53043 11 3" className="stroke-gray-400 false" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-[15px]  ml-[9px] lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-brand font-bold ">Projects</span>
              </div>
              <div className="flex flex-shrink-0 ml-2">
                {/* <svg className="w-3 h-3 flex-shrink-0 ml-1  false stroke-brand fill-brand text-brand" viewBox="0 0 12 12">
                  <path fill="white" d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                </svg> */}
                <svg className="w-3 h-3 flex-shrink-0 ml-1  transform rotate-180 fill-current text-gray-400" viewBox="0 0 12 12">
                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                </svg>
              </div>
            </div>
          </button>
          <div className="flex flex-col gap-1 pl-8 mt-2 false">
            <Link to="/JavascriptDashboard" className="flex items-center gap-2 rounded-lg hover:bg-gray-900 py-2 px-3">
              <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#F7DF1E" />
                <text x="50%" y="50%" fontWeight={600} textAnchor="middle" dy=".35em" fontFamily="Arial" fontSize="12" fill="#000">JS</text>
              </svg>

              <span className="text-gray-200 hover:text-white mb-1 last:mb-0 flex relative font-medium text-sm">Javascript</span>
            </Link>
            <Link to="/ReactDashboard" className="flex items-center gap-2 rounded-lg hover:bg-gray-900 py-2 px-3">
              <svg width="25" height="25" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                <circle cx="125" cy="125" r="50" fill="#61DAFB" />
                <g fill="none" stroke="#61DAFB" strokeWidth="12">
                  <ellipse cx="125" cy="125" rx="100" ry="45" />
                  <ellipse cx="125" cy="125" rx="100" ry="45" transform="rotate(60 125 125)" />
                  <ellipse cx="125" cy="125" rx="100" ry="45" transform="rotate(-60 125 125)" />
                </g>
              </svg>

              <span className="text-gray-200 hover:text-white mb-1 last:mb-0 flex relative font-medium text-sm">React</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppSidebar;