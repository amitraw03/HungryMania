import { CDN_URL } from "../utils/constants";
import { Star } from "lucide-react";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="w-full h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          // Keep existing image props
        />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-base sm:text-lg truncate">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2">
          {cuisines.join(", ")}
        </p>
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            {avgRating}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
            {costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
