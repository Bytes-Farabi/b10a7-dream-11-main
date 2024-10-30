import { useState } from 'react'
import Home from './AllComponents/Home/Home'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notifyDuplicate = () =>toast('Already Selected')

  const notifyInsufficientBalance = () => toast('Do not have sufficient balance')

  const [credit, setCredit] = useState(0)

  const [selectedPlayer, setSelectedPlayer] = useState([])

  const handleCredit = () =>{
    setCredit(prevCredit => prevCredit+10)
  }

  const handledecreasePrice = (decreasePrice) =>{
    setCredit(credit - decreasePrice)
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
    const isExist = selectedPlayer.find((p) => p.id == player.id)

    if (isExist) {
      return notifyDuplicate()
    }
    if(credit < player.price){
      return notifyInsufficientBalance()
    }
    {
      handledecreasePrice(player.price)
      const newPlayer = [...selectedPlayer, player]
      setSelectedPlayer(newPlayer)
    }
  }

  const handleDelete = (plr) =>{
    const playerId = plr.id
    const newPlayers = selectedPlayer.filter((p) =>p.id != playerId)
    setSelectedPlayer(newPlayers)
  }


  return (
    <>
      <Home handleActiveTab={handleActiveTab} isActive={isActive} handleCredit={handleCredit} credit={credit} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer} handleDelete={handleDelete}></Home>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
