import React, { useRef, useState } from 'react'
import './TickTacToe.css'
import circle_icon from '../Assets/IMages/OIP.jpg'
import cross_icon from '../Assets/IMages/XXX.jpg'
let data = ["","","","","","","","",""];
export default function TicTackToe() {
        
    let [count, setCount] = useState(0);    
    let [lock, setLock] = useState(false);

    let titleRef = useRef(null);
    
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    
    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const Togle = (e,num) => {
        if(lock){
            console.log("no");
            return 0;
        }
        if(count%2===0){
            if(typeof(e.target.innerHTML) !== "img"){
                e.target.innerHTML = `<img src = '${cross_icon}'>`;
                data[num] = "x";
                setCount(++count);
                
            }
            console.log(data);
        }
        else{
            if(typeof(e.target.innerHTML) !== "img"){
                e.target.innerHTML = `<img src = '${circle_icon}'>`;
                data[num] = "o";
                setCount(++count);
                
            }
            console.log(data);
        }
        checkWin();
    }
    const checkWin = () =>{
        console.log("entered");
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            console.log("st1")
            won(data[1]);
        }
        else if(data[3]===data[5] && data[5]===data[4] && data[5]!==""){
            console.log("st2")
            won(data[4]);
        }
        else if(data[6]===data[8] && data[7]===data[8] && data[7]!==""){
            console.log("st3")
            won(data[7]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            console.log("st4")
            won(data[6]);
        }
        else if(data[1]===data[4] && data[7]===data[4] && data[7]!==""){
            console.log("st5")
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            console.log("st6")
            won(data[8]);
        }
        else if(data[0]===data[4] && data[8]===data[4] && data[8]!==""){
            console.log("st7")
            won(data[8]);
        }
        else if(data[2]===data[6] && data[4]===data[6] && data[4]!==""){
            console.log("st8")
            won(data[2]);
        }
        // else{
        //     for(var i = 0; i < 9; i++){
        //         if(box_array[i]!=="" && i === 8){
        //             titleRef.current.innerHTML = `It's a Tie Game! Click on Reset Button`;
        //         }
        //     }
        // }
    }

    const resetHandle = () => {
        setLock(false);
        data = ["","","","","","","","",""];
        console.log(data);
        titleRef.current.innerHTML = 'Tic Tac Toe In <span> React </span>'; 
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

    const won = (winner) => {
        setLock(true);
        if(winner === "x" ){
            titleRef.current.innerHTML = `Congratulations:  <img src = ${cross_icon}>`;
        }
        else{
            titleRef.current.innerHTML = `Congratulations:  <img src = ${circle_icon}>`;
        }
    }


  return (
    <div className='conatiner'>
        <h1 className='title' ref={titleRef}> Tic Tac Toe Game In <span>React</span> </h1>
        <div className='board' >
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>Togle(e,0)} ></div>
                <div className="boxes" ref={box2} onClick={(e)=>Togle(e,1)} ></div>
                <div className="boxes" ref={box3} onClick={(e)=>Togle(e,2)} ></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>Togle(e,3)} ></div>
                <div className="boxes" ref={box5} onClick={(e)=>Togle(e,4)} ></div>
                <div className="boxes" ref={box6} onClick={(e)=>Togle(e,5)} ></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7}  onClick={(e)=>Togle(e,6)} ></div>
                <div className="boxes" ref={box8}  onClick={(e)=>Togle(e,7)} ></div>
                <div className="boxes" ref={box9} onClick={(e)=>Togle(e,8)} ></div>
            </div>
        </div>
        <button className='reset' onClick={()=>{resetHandle()}}>Reset</button>
    </div>
  )
}
