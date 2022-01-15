import React from 'react'
import straznik from '../img/straznik.png'
import {useNavigate} from 'react-router-dom'
import { computeHp, giveGold, setIndex, zeruj } from '../state/action-creator/actionCreator'
import {actionCreator} from '../state/index'
import {bindActionCreators} from 'redux'
import {useDispatch,useSelector} from 'react-redux'
function GameOver() {
const dispatch=useDispatch()
const zloto=useSelector((state)=>state.zloto.zloto)
console.log(zloto)
    const {giveGold,computeHp,setIndex,name,zeruj}=bindActionCreators(actionCreator,dispatch)
    const navigate=useNavigate()
const startAgain=()=>{
    computeHp(200)

   
    setIndex(0)
    name("")
    navigate('/')
    zeruj()
}

    return (
        <div className="gameover">
            <div className="napisy">
                <div className="content">
                <h1>Thanks for game</h1>
                <p style={{color:"darkblue"}}>It was good battle</p>
                <p></p>
                <p> Many hands make light work </p>
                <p>Strike while the iron is hot</p>
                <p>  Honesty is the best policy</p>
                <p>The grass is always greener on the other side of the fence</p>
                <p>Don’t judge a book by its cover</p>
                <p> An apple a day keeps the doctor away</p>
                <p>Better late than never</p>
                <p> Don’t bite the hand that feeds you</p>
                <p>Rome wasn’t built in a day</p>
                <p>Actions speak louder than words</p>
                <p>It’s no use crying over spilt milk</p>
                <p>Still waters run deep</p>
                <p>Curiosity killed the cat</p>
                <p>My hands are tied</p>
                <p>Out of sight, out of mind</p>
                <p>Easy come, easy go</p>
                <div style={{display:"flex",justifyContent:"center"}}><img src={straznik} alt=""/></div>
        <p className="over">Game Over</p>
        <button className="btnStartAgain" onClick={()=>startAgain()}>Start Again</button>
                </div>
              
            </div>
        </div>
    )
}

export default GameOver
