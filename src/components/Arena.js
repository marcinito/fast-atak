import React,{useEffect,useRef,useState} from 'react'
import bandit from '../img/Bandit.gif'
import gracz from '../img/graczgra.png'
import tasak from '../img/tasak.png'
import piorun from '../img/piorun.png'
import Miasto from './Miasto'
import defeat from '../img/padl.png'
import zloto from '../img/zloto.png'
import GameOver from './GameOver'

import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../state/index'
import wilk from '../img/wilk.png'
import {useNavigate} from 'react-router-dom'
function Arena(props) {
    const navigate = useNavigate()
  const index=useSelector(state=>state.index.index)
  const noszonaBron=useSelector(state=>state.noszonaBron.noszonaBron)
  let hpGracza=useSelector(state=>state.playerHp.hp)

  const [klik,setKlik]=useState(false)
  const dispatch=useDispatch()
  const {setIndex,giveGold,wearWeapon,computeHp}=bindActionCreators(actionCreator,dispatch)
    const [monsters,setMonsters]=useState([{name:"wilk",hp:110,hit:25,outfit:wilk,gold:100},{name:"Gracz",hp:190,hit:50,outfit:gracz,gold:150},{name:"Mroczny Wilk",hp:50,hit:90,outfit:wilk,gold:200},{name:"Starszy Brat",hp:319,hit:110,outfit:gracz,gold:250},{name:"Starszy Brat",hp:409,hit:140,outfit:bandit,gold:300},{name:"Heavy Fist",hp:100,hit:200,outfit:gracz,gold:300}])
  

    const [dis,setDis]=useState(false)
    let [target,setTarget]=useState(monsters[index])
    // let [playerHp,setPlayerHp]=useState(hpGracza)

  
  

    const name=useSelector((state)=>state.name.name)
    const hero=useSelector((state)=>state.hero.hero)
    const itemki=useSelector((state)=>state.itemki)
   const wlasneItemki=useSelector((state)=>state.wlasneItemki.wlasneItemki)
   
 
  
   const hpmonsterRef=useRef()
   const hpplayerRef=useRef()
   const uderzenieRef=useRef()
   const wybranaBronRef=useRef()
   const atakMonsterRef=useRef()
   const monsterOnArenaRef=useRef()
   let hitOdMonster=useRef()
   let atakNaMonsterRef=useRef()
   let uderzenieNaMonsterRef=useRef()
   let iloscMiksturRef=useRef()
   let doneRef=useRef()
   let postacOnArenaRef=useRef()
   let clearRef=useRef()
   let clear2Ref=useRef()
   let arenaRef=useRef()

   useEffect(()=>{
    
    if(target.hp<=0){
     
        
      setTimeout(()=>{
        setIndex()
        giveGold(target.gold)
   
       
    doneRef.current.classList.add("doneActive")


      },1000) 
 


        
    }
},[target])

const leczenie =()=>{
   itemki.hpPotion.ilosc>0 ? dispatch({type:"ile"}):console.log("Nie masz wystarczajace ilosc potionow")
  
}
console.log(noszonaBron)
/*Atak Atak Atak Atak Atak Atak Atak Atak Atak Atak*/
useEffect(()=>{
    hpplayerRef.current.style.width=hpGracza +"px"
    hpmonsterRef.current.style.width=target.hp +"px"
},[])
const atak=()=>{
    // hpplayerRef.current.style.width=hpGracza +"px"
    hpmonsterRef.current.style.width=target.hp +"px"
   
    hitOdMonster.current=Math.floor(Math.random()*target.hit)
    atakNaMonsterRef.current=noszonaBron.hit+Math.floor(Math.random()*noszonaBron.iloczyn+1)
wybranaBronRef.current.classList.add("wybranaBronActive")

setTimeout(()=>{
 
monsterOnArenaRef.current.classList.add("monsterOnArenaHit")
wybranaBronRef.current.classList.remove("wybranaBronActive")
uderzenieNaMonsterRef.current.classList.add("atakNaMonster")
uderzenieNaMonsterRef.current.textContent=atakNaMonsterRef.current
setTarget({...target},target.hp-=atakNaMonsterRef.current)
hpmonsterRef.current.style.width=target.hp +"px"
setTimeout(()=>{
    monsterOnArenaRef.current.classList.remove("monsterOnArenaHit")
    
  
},500)

setTimeout(()=>{
if(target.hp<=0){
    return
}
atakMonsterRef.current.classList.add("atakMonsterActive")
computeHp(Number(hpGracza-=hitOdMonster.current))
 hpplayerRef.current.style.width=hpGracza +"px"
uderzenieRef.current.textContent=hitOdMonster.current

uderzenieRef.current.classList.add("uderzenieActive")


clearRef.current=setTimeout(()=>{
  
    atakMonsterRef.current.classList.remove("atakMonsterActive")
    uderzenieRef.current.classList.remove("uderzenieActive")
    uderzenieNaMonsterRef.current.classList.remove("atakNaMonster")
   
 
},1000)
},600)

},2800)



}
useEffect(()=>{

    setTarget(monsters[index])

  
    hpplayerRef.current.style.width=hpGracza +"px"

   
},[target,hpGracza])

useEffect(()=>{
  if(hpGracza<0) {
      clear2Ref.current=setTimeout(()=>{
        console.log("przegrales")
        postacOnArenaRef.current.src=String(defeat)
        window.clearTimeout(clearRef.current)
        atakMonsterRef.current.classList.remove("atakMonsterActive")
        uderzenieNaMonsterRef.current.textContent="Muahaha"
    arenaRef.current.classList.add("arenaActive")
      
        setTimeout(()=>{
navigate('/gameover')
        },5000)
 
      },10)
  

    }
    
},[hpGracza])


    return (
        <div className="arena" ref={arenaRef}>
            <img ref={wybranaBronRef} className="wybranaBron" src={null} alt="wybranaBron"/>
            <img ref={atakMonsterRef} className="atakMonster"src={null} alt="wybranaBron"/>
            <div className="playerFight">
                <div className="hp" ref={hpplayerRef} style={{color:"white",fontSize:"10px",textAlign:"center"}}>{hpGracza}</div>
                <div className="eqFight">
                <div className="bronFight"><img src={noszonaBron.bron} alt="weapon"/></div>
                <div className="fluidyFight" ref={iloscMiksturRef} onClick={()=>leczenie()}><p className="liczbaFluidowArena">{itemki.hpPotion.ilosc}</p><img src={itemki.hpPotion.name} alt="fluidy"/></div>

                </div>
                <div className="playerFightPos">
                <div className="uderzenie" ref={uderzenieRef} style={{fontSize:"40px"}}></div>
                
                    <div className="namePlayerFight">{name}</div>
                    <img className="postacOnArena" ref={postacOnArenaRef} src={hero} alt="player"/>
                </div>
            </div>
            <div className="monsterFight">
            <div className="hpMonster" ref={hpmonsterRef} style={{fontSize:"15px",color:"white"}}>{target.hp}</div>
            <div className="monsterFightPos">
               
                <div className="getHitFromPlayer" ref={uderzenieNaMonsterRef} style={{fontSize:"50px",color:"orange"}}></div>
                <div className="nameMonsterFight">{monsters[index].name}</div>
                <img ref={monsterOnArenaRef} className="monsterOnArena" src={monsters[index].outfit} alt="wilk"/>
               
            </div>
            </div>

            <button className="powrot" onClick={()=>navigate("/miasto")}>Powrot</button>
            <button disabled={dis} className="atak" onClick={()=>atak()}>Atak</button>
          
           <div className="done" ref={doneRef}>
               <h1>Udało Ci się pokonać Bestia,Congratulation!</h1>
               <em>Twój łup z Besti to <span>{target.gold}</span></em><br></br>
               <img src={zloto} alt="zloto"/>
               <button className="powrotPoWygranej" onClick={()=>navigate("/miasto")}>Wróć do miasta</button></div>
        
        </div>
    )
}


export default Arena
