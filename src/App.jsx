
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const gods = [
        {name: "Battleworn" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"},
        {name: "DeathKnight" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/9b/T_Achilles_DeathKnight_Icon.png"},
        {name: "Demon" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/67/T_Achilles_Demon_Icon.png"},
        {name: "KnightOfMordred" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/62/T_Achilles_KnightOfMordred_Icon.png"},
        {name: "WhiteHot" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/07/T_Agni_WhiteHot_Icon.png"},
        {name: "DarkAngel" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/44/T_AhMuzenCab_DarkAngel_Icon.png"},
        {name: "BlackGold" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a6/T_Amaterasu_BlackGold_Icon.png"},
        {name: "AnimeMaid" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/4b/T_Amaterasu_AnimeMaid_Icon.png"},
        {name: "CCSkin" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/7e/T_Amaterasu_CCSkin_Icon.png"}
    ];

    const [commands, setCommands] = useState(['command1', 'command2', 'command3','command4','command5',]);
    const [commandIndex, setCommandIndex] = useState(0);
    const [imgGod, setImgGod] = useState();
    const [teamA, setTeamA] = useState([{},{}]);
    const [teamB, setTeamB] = useState([{},{}]);
    const [bansA, setBansA] = useState([{},{}]);
    const [bansB, setBansB] = useState([{},{}]);
    let pass = true;
    
    
    function Verification(godSelected, commandIndex){
        // console.log(bansA.find(e => e == godSelected))
        // if(undefined){
        //     pass = false;
        // }
        // if(bansA.find(e => e == godSelected)){
        //     console.log("BANISHED") 
        // }

    }
    
    function ImageGod(imgGod){
        setImgGod(imgGod);
        if(commandIndex === 0) setBansA([imgGod, {}])
        if(commandIndex === 1) setBansB([imgGod, {}])
        if(commandIndex === 2) setTeamA([imgGod, {}])
        if(commandIndex === 3) setTeamB([imgGod, {}])
        if(commandIndex === 4) setBansA([bansA[0], imgGod])
        if(commandIndex === 5) setBansB([bansB[0], imgGod])

        // setTeamA([teamA[0], imgGod]);
    }

    function MainScript(){
        if(!imgGod){
            alert("You should select a God!");
            return;
        }
        
        ImageGod(imgGod);
        Verification(imgGod, commandIndex);
        if(!pass) return;
        
        setCommandIndex(commandIndex+1);
        setImgGod();

    }

   
        
  return (
    <>
        <div className="App">
                <div id='title' className="container">
                    <h1>Smite Picks</h1>
                </div>
                <div id='playercommands' className="fluid-container bg-success">
                    {commands[commandIndex]}
                    <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                </div>
                <div id='maincontent' className="fluid-container">
                    <div className="row">
                        <div id="team1" className='bg-primary col'>
                           {teamA.map((teamA, index)=>{
                            return(
                                <div className="row player_container">
                                    <div className="img_container my-2">
                                        <img src={teamA.image === undefined ? "https://cdn.shopify.com/s/files/1/0735/7415/products/smite-pentakill_2000x.jpg?v=1542612477" : teamA.image} alt="..."/>
                                    </div>
                                    <span>{teamA.name === undefined ? "Player"+(index+1) : teamA.name}</span>
                                </div>
                            )
                           })}
                           <div id="bans_team1" className='row'>
                                {bansA.map((bansA)=>{
                                    return(
                                            <div className="col">
                                                <h1>Bans</h1>
                                                <div className="img_container my-2">
                                                    <img src={bansA.image === undefined ? "https://cdn.shopify.com/s/files/1/0735/7415/products/smite-pentakill_2000x.jpg?v=1542612477" : bansA.image} alt="..."/>
                                                </div>
                                            </div>
                                    )
                                })} 
                            </div>
                        </div>
                        <div id="gods" className='bg-dark col'>
                           {gods.map((element)=>{
                            return(
                                <div className='gods_images' onClick={()=>{ImageGod(element)}}>
                                    {element.name}
                                    <img src={element.image} alt={element.name} />
                                </div>   
                            )
                           })}
                        </div>
                        <div id="team2" className='bg-danger col'>
                        {teamB.map((teamB, index)=>{
                            return(
                                <div className="row">
                                    <div className="img_container my-2">
                                        <img src={teamB.image === undefined ? "https://cdn.shopify.com/s/files/1/0735/7415/products/smite-pentakill_2000x.jpg?v=1542612477" : teamB.image} alt="..."/>
                                    </div>
                                    <span>{teamB.name === undefined ? "Player"+(index+3) : teamB.name}</span>
                                </div>
                            )
                           })}
                            <div id="bans_team1" className='row'>
                                {bansB.map((bansB)=>{
                                    return(
                                            <div className="col">
                                                <h1>Bans</h1>
                                                <div className="img_container my-2">
                                                    <img src={bansB.image === undefined ? "https://cdn.shopify.com/s/files/1/0735/7415/products/smite-pentakill_2000x.jpg?v=1542612477" : bansB.image} alt="..."/>
                                                </div>
                                            </div>
                                    )
                                })} 
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>

    </>
  );
}

export default App;
