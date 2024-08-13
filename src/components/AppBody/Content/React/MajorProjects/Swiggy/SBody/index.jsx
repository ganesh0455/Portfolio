// import RestaurantCardUI from "../Shimmer UI/restaurantCardUI";
import toast from 'react-hot-toast';

import { clodinaryImageCDN } from "../../../../../../../assets/Constants/swiggy";
import RestaurantCardUI from "../Shimmer UI/restaurantCardUI";
import { restaurantsListAndDetails, update2, update3, update4, update5, update6, update7 } from "../utils";
import RestaurantCard from "./restaurantCard";
import { update1 } from "../utils";
import { useState } from "react";

const SwiggyBody = () => {

    const handleSearch = (event) => {
        event.preventDefault();
    }

    let updatedRestaurants = restaurantsListAndDetails.concat(update1);

    const [restaurantsCards, setRestaurantsCards] = useState(updatedRestaurants);
    const [indexToFetch, setIndexToFetch] = useState(0);
    const [showShimmerCards, setShowShimmerCards] = useState(false);

    const remainingCards = [update2, update3, update4, update5, update6, update7];

    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function () {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    const handleScroll = () => {
        // console.log("**********");
        if (indexToFetch < 6) {
            setShowShimmerCards(true);
        }
        const restorantsDiv = document.getElementById("restaurantDetails");
        const scrollTop = window.scrollY || restorantsDiv.scrollTop;
        const scrollHeight = restorantsDiv.scrollHeight;
        const clientHeight = restorantsDiv.clientHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

        if (scrollPercent >= 90) {
            console.log('You have scrolled 90% down the page!', indexToFetch);
            // You can add any additional actions you want to perform here
            if (indexToFetch < 6) {
                updatedRestaurants = restaurantsCards.concat(remainingCards[indexToFetch]);
                setTimeout(() => {
                    setRestaurantsCards(updatedRestaurants);
                    setIndexToFetch(indexToFetch + 1);
                    setShowShimmerCards(false);
                }, 1000);
            }
            else {
                toast.success("There are no more records to fetch!");
                setShowShimmerCards(false);
            }
        }
    }

    const throttledScroll = throttle(handleScroll, 1500);

    return (
        <div className="flex flex-col justify-center items-center h-full p-3 overflow-auto mt-28" id="restaurantDetails" onScroll={throttledScroll}>
            <form className="w-full flex justify-center py-3 mt-5" onSubmit={handleSearch}>
                <input type="search" placeholder="Search" className="py-4 px-4 w-[20%] border-2 rounded-xl" />
            </form>
            <div className="w-[80%] h-full rounded-xl py-14 px-4 flex flex-wrap">

                {restaurantsCards.map((restaurant, index) => {
                    const { info } = restaurant;
                    const { id, name, cloudinaryImageId, cuisines, sla, locality } = info;
                    let updatedCuisines = [];

                    if (cuisines.length > 2) {
                        cuisines.length = 2;
                        updatedCuisines = cuisines.join(", ");
                        updatedCuisines = updatedCuisines + "...";
                    }
                    else {
                        updatedCuisines = cuisines.join(", ");
                    }

                    return (
                        <RestaurantCard
                            key={id + index}
                            cloudinaryImageId={`${clodinaryImageCDN}/${cloudinaryImageId}`}
                            restaurantName={name}
                            deliveryTime={sla.slaString}
                            cuisines={updatedCuisines}
                            locality={locality}
                        />
                    )
                })}
                {showShimmerCards && (
                    <>
                        <RestaurantCardUI />
                        <RestaurantCardUI />
                        <RestaurantCardUI />
                        <RestaurantCardUI />
                    </>
                )}
            </div>
        </div>
    )
}

export default SwiggyBody;