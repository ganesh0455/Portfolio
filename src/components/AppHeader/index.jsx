import toast from 'react-hot-toast';
import HambergerBlack from "../../assets/images/hambergerBlack.svg";
import "./index.css";
import { useEffect, useState } from 'react';
import { profileDetails } from '../../assets/Constants/profiles';

const AppHeader = (props) => {
  const [date, setDate] = useState(new Date());

  const { profilePic } = profileDetails;

  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(tick, 1000);

    return () => {
      clearInterval(timerID);
    }
  }, [])

  const showtoast = () => {
    toast.success("Google login successfull!");
  }

  const hanldeHamberger = () => {
    props.toggleSidebar();
  }

  return (
    <div className="px-6 h-16 sticky flex justify-between items-center border-zinc-200 border-b">
      <div className="w-9 h-9 cursor-pointer flex items-center justify-center hover:bg-slate-200 rounded-full" onClick={hanldeHamberger}>
        <img className="w-6" src={HambergerBlack} alt="hamberger" />
      </div>
      <div className='py-2 border-2 rounded-xl text-zinc-900 px-4 font-medium shadow-sm'>
        <span className='text-lg time-fire' onClick={showtoast}>{date.toLocaleTimeString()}</span>
      </div>
      <div>
        <img className="w-10 h-10 rounded-full cursor-pointer" src={profilePic} alt="profile-pic" />
      </div>
    </div>
  );
}

export default AppHeader;