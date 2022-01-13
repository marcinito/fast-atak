import React,{useEffect,useRef,useState} from 'react'
import straznik from '../img/straznik.png'
import Create from './Create'
import Arena from './Arena'
import {useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreator} from '../state/index'
import Miasto from './Miasto'
import Sklep from './Sklep'

import {useNavigate,Routes,Route} from 'react-router-dom'
import GameOver from './GameOver'
function Home() {
    const navigate=useNavigate()
    const index=useSelector(state=>state.index.index)
    const [dis,setDis]=useState(true)
    const [next,setNext]=useState(false)
    const rozmowaRef=useRef()
    const homeRef=useRef()
    const logoRef=useRef()
    const dialogRef=useRef()
    const bottomRef=useRef()

    useEffect(()=>{
     
const mowaStraznika=["Witaj dobry człowieczku...nie chodzi mi o twoją ceche charakteru","niestety czasami trzeba sobie odmówić obiadu","żyjesz dlatego że jestes mi potrzebny,znalazlem Cie","ledwo oddychającego przy drodze, i jakos moji magicy doprowadzili Cie do porządku ","masz u mnie dług","dopóki go nie spłacisz bedziesz wykonywał moje zlecenia,muahaha"] 
        let letter=0
        let textIndex=0
const mowa=()=>{
    rozmowaRef.current.textContent+=mowaStraznika[textIndex][letter]
    letter++
    if(letter===mowaStraznika[textIndex].length){
        letter=0
        return setTimeout(()=>{
            textIndex++
            rozmowaRef.current.textContent=""
            if(textIndex===mowaStraznika.length){
                setDis(false)
                return
            }
            mowa()

        },1)
    }
    setTimeout(mowa,1)
}
mowa()
    },[])
    const switchPage=()=>{
        homeRef.current.classList.add("homeactive")
    
      
        setTimeout(()=>{
           
      
            navigate('/create')
        },3000)

    }

    return (
        <div className="routes">
  
        <div className="home" ref={homeRef}>
      
              <div className="logo" ref={logoRef}>
                  <h1 className="hjeden">StayAlive</h1>
                  <h1 className="hdwa">StayAlive</h1>
              </div>
  <div className="dialog" ref={dialogRef}>
      <div className="rozmowa" ref={rozmowaRef}></div>
      <img className="straznik" src={straznik} alt="straznik"/>
  </div>
  <div className="bottom" ref={bottomRef}>
      <button className="btnGraj" disabled={dis} onClick={()=>switchPage()}>graj</button>
  </div>
        </div>
        </div>
    )
}

export default Home
