import React,{useEffect,useRef,useState} from 'react'
import bandit from '../img/Bandit.gif'
import gracz from '../img/graczgra.png'
import tasak from '../img/tasak.png'
import piorun from '../img/piorun.png'
import Miasto from './Miasto'
import defeat from '../img/padl.png'
import zloto from '../img/zloto.png'
import GameOver from './GameOver'
import Dragon from '../img/Dragon_Lord.gif'
import Hydra from '../img/Hydra.gif'
import Vampire from '../img/Vampire.gif'
import Weeper from '../img/Weeper.gif'
import drag2 from '../img/tibia-drag.gif'


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
    const [monsters,setMonsters]=useState([{name:"Vampire",hp:110,hit:150,outfit:gracz,gold:100},{name:"Bandit",hp:190,hit:50,outfit:gracz,gold:150},{name:"Hydra",hp:50,hit:90,outfit:Hydra,gold:200},{name:"Dragon",hp:319,hit:110,outfit:drag2,gold:250},{name:"Lord Dragon",hp:409,hit:140,outfit:Dragon,gold:300},{name:"Weeper",hp:100,hit:200,outfit:Weeper,gold:300}])
  

    const [dis,setDis]=useState(false)
    const [button,setButton]=useState(false)
    let [target,setTarget]=useState(monsters[index])
    let [initial,setInitial]=useState(monsters[index].hp)
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
   const playerFightAreaRef=useRef()
   const monsterFightAreaRef=useRef()
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
   console.log("teraz")
       
    doneRef.current.classList.add("doneActive")


      },10) 
 


        
    }
},[target])

const leczenie =()=>{
   itemki.hpPotion.ilosc>0 ? dispatch({type:"ile"}):console.log("Nie masz wystarczajace ilosc potionow")
  setKlik(!klik)

}
console.log(noszonaBron)
/*Atak Atak Atak Atak Atak Atak Atak Atak Atak Atak*/
useEffect(()=>{
 
    hpplayerRef.current.style.width=hpGracza +"px"
    hpmonsterRef.current.style.width=target.hp +"px"
},[])
const atak=()=>{
    // hpplayerRef.current.style.width=hpGracza +"px"
    

   
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
    hpmonsterRef.current.style.width=target.hp + "px"

   
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
useEffect(()=>{
  
    if(target.hp<initial){
        setButton(true)

    }
    console.log(typeof playerFightAreaRef.current.clientWidth)
    console.log(typeof hpGracza)
    console.log(hpplayerRef.current)
})
useEffect(()=>{
    if(hpGracza>playerFightAreaRef.current.clientWidth-100){
        hpplayerRef.current.style.width=playerFightAreaRef.current.clientWidth-100 +"px"
       
    }
 if(target.hp>monsterFightAreaRef.current.clientWidth-100){
  
        hpmonsterRef.current.style.width=monsterFightAreaRef.current.clientWidth-100 +"px"
    }
    console.log(`width${monsterFightAreaRef.current.clientWidth}`)
    console.log(`width${playerFightAreaRef.current.clientWidth}`)
})

    return (
        <div className="arena" ref={arenaRef}>
            <img ref={wybranaBronRef} className="wybranaBron" src={null} alt="wybranaBron"/>
            <img ref={atakMonsterRef} className="atakMonster"src={null} alt="wybranaBron"/>
            <div className="playerFight" ref={playerFightAreaRef}>
                <div className="hp" ref={hpplayerRef} >{hpGracza}</div>
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
            <div className="monsterFight" ref={monsterFightAreaRef}>
            <div className="hpMonster" ref={hpmonsterRef} >{target.hp}</div>
            <div className="monsterFightPos">
               
                <div className="getHitFromPlayer" ref={uderzenieNaMonsterRef} ></div>
                <div className="nameMonsterFight">{monsters[index].name}</div>
                <img ref={monsterOnArenaRef} className="monsterOnArena" src={monsters[index].outfit} alt="wilk"/>
               
            </div>
            </div>

            <button className="powrot" disabled={button} onClick={()=>navigate("/miasto")}>Powrot</button>
            <button disabled={dis} className="atak" onClick={()=>atak()}>Atak</button>
          
           <div className="done" ref={doneRef}>
               <h1>Uda??o Ci si?? pokona?? Bestia,Congratulation!</h1>
               <em>Tw??j ??up z Besti to <span>{target.gold}</span></em><br></br>
               <img src={zloto} alt="zloto"/>
               <button className="powrotPoWygranej"  onClick={()=>navigate("/miasto")}>Wr???? do miasta</button></div>
        
        </div>
    )
}


export default Arena
