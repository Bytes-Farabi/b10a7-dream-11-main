import { useState } from 'react'
import Home from './AllComponents/Home/Home'
import './App.css'

function App() {

  const [credit, setCredit] = useState(500)

  const [selectedPlayer, setSelectedPlayer] = useState([])

  const handleCredit = () =>{
    console.log('credit clicked');
  }

  

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  })

  const handleActiveTab = (status) =>{
    if (status == "available") {
      setIsActive({
        available: true,
        status: 'available'
      })
    }
    else{
      setIsActive({
        available: false,
        status:"selected"
      })
    }
  }

  const handleSelectedPlayer = (player) =>{
    console.log(player);
    const isExist = selectedPlayer.find((p) => p.id == player.id)

    if (isExist) {
      return alert('exist')
    }
    {
      const newPlayer = [...selectedPlayer, player]
      setSelectedPlayer(newPlayer)
    }
  }

  console.log(selectedPlayer);

  return (
    <>
      <Home handleActiveTab={handleActiveTab} isActive={isActive} handleCredit={handleCredit} credit={credit} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer}></Home>
    </>
  )
}

export default App
