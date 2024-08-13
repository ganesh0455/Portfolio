import { swiggyLogo } from "../../../../../../../assets/Constants/swiggy";
import { navItems } from "../utils";

const SwiggyHeader = () => {
  return (
    <div className="flex items-center justify-between px-8 py-2 bg-green-800 text-white fixed w-full">
      <div>
        <img className="w-[60px] h-[60px] rounded-full" src={swiggyLogo} alt="swiggy-logo" />
      </div>
      <div>
        <ul className="flex">
          {navItems.map((item) => {
            return <li className="px-4 mx-4 cursor-pointer hover:bg-gray-800 p-2 rounded-lg" key={item.id}>{item.navitem}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default SwiggyHeader;