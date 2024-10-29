import Banner from "../Banner/Banner";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="tab-row flex justify-between mt-10 items-center">
                <div>
                    <h3 className="font-bold text-2xl">Available Players</h3>
                </div>
                <div>

                    <div className="inline-flex items-center border rounded-full overflow-hidden">
                        {/* Available Button */}
                        <div className="px-4 py-2 font-semibold bg-[#E7FE29] text-black">
                            Available
                        </div>

                        {/* Selected Button */}
                        <div className="px-4 py-2 font-semibold text-gray-500">
                            Selected (0)
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;