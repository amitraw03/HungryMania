import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Header from "./Header";
import BgVideo from "./BgVideo";
import Footer from "./Footer";
import { Search, Star } from "lucide-react"; // Import icons

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isTopRated, setIsTopRated] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("/api/dapi/restaurants/list/v5?lat=28.4798396&lng=77.3223915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const response = await data.json();
            setListOfRestaurants(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.log(error);
        }
    }

    const handleTopRated = () => {
        setIsTopRated(!isTopRated);
        const filteredList = isTopRated
            ? ListOfRestaurants
            : ListOfRestaurants.filter((res) => res.info.avgRating > 4);
        setFilteredRestaurants(filteredList);
    };

    const isOnline = useOnlineStatus();
    if (isOnline === false) return (
        <h1 className="text-center p-4 text-xl">Looks like you're Offline !! Please Check Your Internet Connection</h1>
    );

    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <Header />
            <BgVideo />
            <div className="body">
                <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-24 items-center">
                    <div className="my-4 w-full md:w-auto">
                        <button 
                            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 ${isTopRated ? 'bg-gradient-to-bl' : ''}`}
                            onClick={handleTopRated}
                        >
                            <span className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-white">
                                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                                {isTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
                            </span>
                        </button>
                    </div>

                    <div className="search w-full md:w-[420px] my-4">
                        <div className="relative">
                            <input 
                                className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm"
                                type="text"
                                placeholder="Search restaurants..."
                                data-testid="searchInput"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <button 
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md font-medium transition-all duration-300 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    const searchRes = ListOfRestaurants.filter(
                                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                    );
                                    setFilteredRestaurants(searchRes);
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 lg:px-14 mb-10">
                    {filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Body;