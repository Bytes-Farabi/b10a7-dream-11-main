import Available from "../Available/Available";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Selected from "../Selected/Selected";

const Home = ({ handleActiveTab, isActive }) => {
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

                        <button onClick={() => handleActiveTab('available')} className={`${isActive.available ? "btn rounded-none px-4 py-2 font-semibold bg-[#E7FE29] text-black" : "btn"}`}>
                            Available
                        </button>


                        <button onClick={() => handleActiveTab('Selected')} className={`${isActive.available ? "btn " : 'btn rounded-none px-4 py-2 font-semibold bg-[#E7FE29] text-black'}`}>
                            Selected (0)
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {
                    isActive.available ? <Available></Available> : <Selected></Selected>
                }
            </div>
        </div>
    );
};

export default Home;


// btn rounded-none px-4 py-2 font-semibold bg-[#E7FE29] text-black