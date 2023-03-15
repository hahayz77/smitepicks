
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const repeat = [
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
    const [teams, setTeams] = useState([{},{},{},{}]);
    let teamA = teams.slice(0,2);
    let teamB = teams.slice(2,4);
        
    function Scripts(){
        if(commandIndex <= 1){ 
            setTeams(() => {teams[commandIndex] = repeat[commandIndex]; return teams});
            setCommandIndex(result => result = commandIndex + 1)
        } 
        if(commandIndex > 1 && commandIndex <= 3){
            setTeams(() => {teams[commandIndex] = repeat[commandIndex]; return teams});
            setCommandIndex(result => result = commandIndex + 1)
        }
    }

    function ImageSet(obj){

    }

    useEffect(()=>{
        if(commandIndex !== 0){
            Scripts(commands);
        }
    },[commands])
        
  return (
    <>
        <div className="App bg-danger">
                <div id='title' className="container">
                    <h1>Smite Picks</h1>
                </div>
                <div id='playercommands' className="fluid-container bg-success">
                    {commands[commandIndex]}
                    <button className='btn btn-primary' onClick={()=>{Scripts(()=>{repeat.find(commands)})}}>Select</button>
                </div>
                <div id='maincontent' className="fluid-container">
                    <div className="row">
                        <div id="team1" className='bg-danger col'>
                           {teamA.map((teamA)=>{
                            return(
                                <div className="row">
                                    <div className="img_container">
                                        <img src={teamA.image === undefined ? "" : teamA.image} alt="..."/>
                                    </div>
                                <span>{teamA.name === undefined ? "" : teamA.name}</span>
                                </div>
                            )
                           })}
                        </div>
                        <div id="gods" className='bg-primary col'>
                           {repeat.map((gods)=>{
                            return(
                                <div className='gods_images' onClick={()=>{ImageSet(()=>{repeat.find(repeat.name)})}}>
                                    {gods.name}
                                    <img src={gods.image} alt={gods.name} />
                                </div>   
                            )
                           })}
                        </div>
                        <div id="team2" className='bg-danger col'>
                        {teamB.map((teamB)=>{
                            return(
                                <div className="row">
                                    <div className="img_container">
                                        <img src={teamB.image === undefined ? "" : teamB.image} alt="..."/>
                                    </div>
                                <span>{teamB.name}</span>
                                </div>
                            )
                           })}
                        </div>
                    </div>
                    
                </div>
        </div>

    </>
  );
}

export default App;
