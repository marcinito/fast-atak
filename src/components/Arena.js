import React,{useEffect,useRef,useState} from 'react'
import bandit from '../img/Bandit.gif'
import gracz from '../img/graczgra.png'
import tasak from '../img/tasak.png'
import piorun from '../img/piorun.png'
import Miasto from './Miasto'
import defeat from '../img/padl.png'
import zloto from '../img/zloto.png'

import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../state/index'
import wilk from '../img/wilk.png'
function Arena(props) {
  const index=useSelector(state=>state.index.index)
  const noszonaBron=useSelector(state=>state.noszonaBron.noszonaBron)
  let hpGracza=useSelector(state=>state.playerHp.hp)

  const dispatch=useDispatch()
  const {setIndex,giveGold,wearWeapon,computeHp}=bindActionCreators(actionCreator,dispatch)
    const [monsters,setMonsters]=useState([{name:"wilk",hp:40,hit:50,outfit:wilk,gold:30},{name:"Gracz",hp:50,hit:100,outfit:gracz,gold:50},{name:"Mroczny Wilk",hp:50,hit:150,outfit:wilk,gold:70},{name:"Starszy Brat",hp:150,hit:100,outfit:gracz,gold:150}])
  
    const [toggle,setToggle]=useState(false)
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
  console.log(noszonaBron)
   useEffect(()=>{
    
    if(target.hp<=0){
     
        
      setTimeout(()=>{
        setIndex()
        giveGold(target.gold)
        console.log(`po zabiciu${hpGracza}`)
       
    doneRef.current.classList.add("doneActive")


      },1000) 
 


        
    }
},[target])

const leczenie =()=>{
   itemki.hpPotion.ilosc>0 ? dispatch({type:"ile"}):console.log("Nie masz wystarczajace ilosc potionow")
  
}

/*Atak Atak Atak Atak Atak Atak Atak Atak Atak Atak*/
useEffect(()=>{
    hpplayerRef.current.style.width=hpGracza +"px"
    hpmonsterRef.current.style.width=target.hp +"px"
},[])
const atak=()=>{
    hpplayerRef.current.style.width=hpGracza +"px"
    hpmonsterRef.current.style.width=target.hp +"px"
   
    hitOdMonster.current=Math.floor(Math.random()*target.hit)
    atakNaMonsterRef.current=noszonaBron.hit
wybranaBronRef.current.classList.add("wybranaBronActive")

setTimeout(()=>{
 
monsterOnArenaRef.current.classList.add("monsterOnArenaHit")
wybranaBronRef.current.classList.remove("wybranaBronActive")
uderzenieNaMonsterRef.current.classList.add("atakNaMonster")
uderzenieNaMonsterRef.current.textContent=atakNaMonsterRef.current

setTimeout(()=>{
    monsterOnArenaRef.current.classList.remove("monsterOnArenaHit")
    setTarget({...target},target.hp-=atakNaMonsterRef.current)
  
},500)

setTimeout(()=>{

atakMonsterRef.current.classList.add("atakMonsterActive")
computeHp(Number(hpGracza-=hitOdMonster.current))
 hpplayerRef.current.style.width=hpGracza +"px"
uderzenieRef.current.textContent=hitOdMonster.current

uderzenieRef.current.classList.add("uderzenieActive")


setTimeout(()=>{
  
    atakMonsterRef.current.classList.remove("atakMonsterActive")
    uderzenieRef.current.classList.remove("uderzenieActive")
    uderzenieNaMonsterRef.current.classList.remove("atakNaMonster")
   
 
},1000)
},600)

},2800)



}
useEffect(()=>{
  
  
    setTarget(monsters[index])

  


   
},[target,hpGracza])

useEffect(()=>{
    if(hpGracza<20 && hpGracza>=1 ){
        console.log("Masz szanse sie wycofac")
    }
    else if(hpGracza<0) {
        console.log("Przegrales")
    }
    itemki.hpPotion.ilosc==0?iloscMiksturRef.current.style.backgroundColor="black":iloscMiksturRef.current.style.backgroundColor="white"
})

if(toggle===true){
    return (
        <Miasto/>
    )
}
else {
    return (
        <div className="arena">
            <img ref={wybranaBronRef} className="wybranaBron" src={noszonaBron.bron} alt="wybranaBron"/>
            <img ref={atakMonsterRef} className="atakMonster"src={piorun} alt="wybranaBron"/>
            <div className="playerFight">
                <div className="hp" ref={hpplayerRef} style={{color:"white",fontSize:"10px",textAlign:"center"}}>{hpGracza}</div>
                <div className="eqFight">
                <div className="bronFight"><img src={noszonaBron.bron} alt="weapon"/></div>
                <div className="fluidyFight" ref={iloscMiksturRef} onClick={()=>leczenie()}><p className="liczbaFluidowArena">{itemki.hpPotion.ilosc}</p><img src={itemki.hpPotion.name} alt="fluidy"/></div>

                </div>
                <div className="playerFightPos">
                <div className="uderzenie" ref={uderzenieRef} style={{fontSize:"40px"}}></div>
                
                    <div className="namePlayerFight">{name}</div>
                    <img className="postacOnArena" src={hero} alt="player"/>
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

            <button className="powrot" onClick={()=>props.headback(false)}>Powrot</button>
            <button disabled={dis} className="atak" onClick={()=>atak()}>Atak</button>
          
           <div className="done" ref={doneRef}>
               <h1>Udało Ci się pokonać Bestia,Congratulation!</h1>
               <em>Twój łup z Besti to <span>{target.gold}</span></em><br></br>
               <img src={zloto} alt="zloto"/>
               <button className="powrotPoWygranej" onClick={()=>setToggle(true)}>Wróć do miasta</button></div>
        
        </div>
    )
}
}

export default Arena
