const SinglePlayer = ({ player, handleSelectedPlayer }) => {

  // const {id} = player

  return (
    <div>

      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg p-4 mx-auto">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={player.imageUrl}
          alt={player.name}
        />
        <div className="p-4">
          <div className="flex items-center mb-2">
            <span className="text-gray-600 text-2xl mr-2">👤</span>
            <h3 className="text-lg font-semibold">{player.name}</h3>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 text-xl mr-2">🏳️</span>
            <p className="text-sm text-gray-600">{player.country}</p>
            <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded">
              {player.role}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <h4 className="text-gray-800 font-medium">Rating</h4>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-gray-800 font-medium">Batting Style</h4>
            <p className="text-sm text-gray-600">{player.battingStyle}</p>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-gray-800 font-medium">Price</h4>
            <p className="text-sm text-gray-600">{player.price}</p>
          </div>
          <button onClick={()=>handleSelectedPlayer(player)} className="w-full text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
            Choose Player
          </button>
        </div>
      </div>

    </div>
  );
};

export default SinglePlayer;

// "id": 1,
//         "name": "Viral Kohli",
//         "country": "India",
//         "role": "All-Rounder",
//         "rating": "Left-Hand-Bat",
//         "battingStyle": "Left-Hand-Bat",
//         "price": 1500000,
//         "imageUrl": "https://example.com/image1.jpg"