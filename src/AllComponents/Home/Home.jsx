import Available from "../Available/Available";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Selected from "../Selected/Selected";

const Home = ({ handleActiveTab, isActive, handleCredit, credit, handleSelectedPlayer, selectedPlayer }) => {
    return (
        <div>
            <Header credit={credit}></Header>
            <Banner  handleCredit={handleCredit}></Banner>
            <div className="tab-row flex justify-between mt-10 items-center">
                <div>
                    <h3 className="font-bold text-2xl">Available Players</h3>
                </div>
                <div>
                    <div className="inline-flex items-center border rounded-full overflow-hidden">

                        <button onClick={() => handleActiveTab('available')} className={`${isActive.available ? "btn rounded-none px-4 py-2 font-semibold bg-[#E7FE29] text-black" : "btn"}`}>
                            Available
                        </button>


                        <button onClick={() => handleActiveTab('Selected')} className={`${isActive.available ? "btn " : 'btn rounded-none px-4 py-2 font-semibold bg-[#E7FE29] text-black'}`}>Selected 
                            ({selectedPlayer.length})
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {
                    isActive.available ? <Available handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer}></Available> : <Selected></Selected>
                }
            </div>

            {/* shadow banner */}

            {/* <div>
                <div className="flex items-center justify-center" style={{
          backgroundImage: `url('/assets/banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 16,
          marginTop: 25
        }}>
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-4 sm:mx-0">
                        <h2 className="text-2xl font-semibold text-center mb-2">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                            Get the latest updates and news right in your inbox!
                        </p>

                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="p-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-r-lg hover:opacity-90 transition-opacity duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Home;


// btn rounded-none px-4 py-2 font-semibold bg-[#E7FE29] text-black