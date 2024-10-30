import Available from "../Available/Available";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Selected from "../Selected/Selected";

// eslint-disable-next-line react/prop-types
const Home = ({ handleActiveTab, isActive, handleCredit, credit, handleSelectedPlayer, selectedPlayer, handleDelete }) => {
    return (
        <div>
            <Header credit={credit}></Header>
            <Banner handleCredit={handleCredit}></Banner>
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
                    // eslint-disable-next-line react/prop-types
                    isActive.available ? <Available handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer}></Available> : <Selected selectedPlayer={selectedPlayer} key={selectedPlayer.id} handleDelete={handleDelete}></Selected>
                }
            </div>

            {/* shadow banner */}

            <div className="shadow-banner border border-[#c9111115] mt-40 rounded-lg">
                <div>
                    <div className="flex items-center justify-center" style={{
                        backgroundImage: `url('/assets/bg-shadow.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 16,
                        padding: 20,
                        margin: 30,
                        border: '1px solid gray'
                    }}>
                        <div className="rounded-lg shadow-lg p-8 m-10 mx-4 sm:mx-0">
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
                </div>
            </div>

            <div className="footer-section">
                <footer className="bg-gray-900 text-white py-10 pt-56">
                    <div className="container mx-auto px-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

                        {/* About Us Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">About Us</h3>
                            <p className="text-gray-400">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        {/* Quick Links Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        {/* Subscribe Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                            <p className="text-gray-400 mb-4">
                                Subscribe to our newsletter for the latest updates.
                            </p>
                            <div className="flex justify-center sm:justify-start">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="p-2 rounded-l-md focus:outline-none"
                                />
                                <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold px-4 rounded-r-md hover:opacity-90 transition-opacity duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright Section */}
                    <div className="mt-10 text-center text-gray-400 border-t border-gray-700 pt-6">
                        <p>&copy;2024 Your Company. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Home;