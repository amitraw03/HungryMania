import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } = resData?.info;

    return (
        <div 
            data-testid="resCard"
            className="w-full h-auto bg-white rounded-lg shadow-md"
        >
            <div className="overflow-hidden rounded-t-lg">
                <img 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                />
            </div>
            <div className="p-4">
                <h3 className="font-bold font-serif mb-2 text-lg">{name}</h3>
                <p className="font-mono text-sm mb-2 line-clamp-2">{cuisines.join(", ")}</p>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{avgRating} ⭐</span>
                    <span className="font-semibold text-green-600 bg-yellow-100 p-2 rounded-full">{costForTwo.slice(0,5)}</span>
                </div>
                <p className="font-mono text-sm text-gray-600">{areaName}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;