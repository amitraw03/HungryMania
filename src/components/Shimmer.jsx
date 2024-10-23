const Shimmer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
                {/* Hero section shimmer */}
                <div className="w-full h-48 md:h-64 lg:h-80 bg-slate-300 rounded-lg mb-8"></div>
                
                {/* Cards grid shimmer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="w-full">
                            <div className="bg-slate-300 h-48 rounded-t-lg"></div>
                            <div className="bg-slate-300 h-32 mt-2 rounded-b-lg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shimmer;