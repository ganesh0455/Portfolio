// import { swiggyCardImage } from "../../../../../../../assets/Constants/swiggy"
import StarRating from "./starRateing"

const RestaurantCard = (props) => {
    const {cloudinaryImageId, restaurantName, deliveryTime, cuisines, locality} = props;
  return (
    <div className="w-[250px] h-[270px] rounded-xl m-2">
        <img className="w-full h-[150px] bg-cover rounded-xl" src={cloudinaryImageId} />
        <div className="px-3 py-2">
            <span className="font-bold">{restaurantName}</span>
            <div className="flex items-center gap-2">
                <StarRating />
                <span className="font-semibold">{deliveryTime}</span>
            </div>
            <div className="text-[#02060c99]">{cuisines}</div>
            <span className="text-[#02060c99]">{locality}</span>
        </div>
    </div>
  )
}

export default RestaurantCard