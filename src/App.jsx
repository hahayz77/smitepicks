
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

    const [commands, setCommands] = useState("commands player");
    const [teamA, setTeamA] = useState([
        {name: "Battleworn1" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"},
        {name: "Battleworn2" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"},
        {name: "Battleworn3" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"}
    ]);
    const [teamB, setTeamB] = useState([
        {name: "Battleworn3" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"},
        {name: "Battleworn4" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"},
        {name: "Battleworn5" , image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"}
    ]);
    
    // useEffect(()=>{
    //     alert(commands)
    // },[])

    async function Scripts(){
       
    }

  return (
    <>
        <div className="App bg-danger">
                <div id='title' className="container">
                    <h1>Smite Picks</h1>
                </div>
                <div id='playercommands' className="fluid-container bg-success">
                    {commands}
                    <button className='btn btn-dark' onClick={Scripts}>Start Script</button>
                    <button className='btn btn-primary' onClick={Scripts}>Select</button>
                </div>
                <div id='maincontent' className="fluid-container">
                    <div className="row">
                        <div id="team1" className='bg-danger col'>
                           {teamA.map((teamA, index)=>{
                            return(
                                <div className="row">
                                    <div className="img_container">
                                        <img src={teamA.image} alt="..."/>
                                    </div>
                                <span>{teamA.name}</span>
                                </div>
                            )
                           })}
                        </div>
                        <div id="gods" className='bg-primary col'>
                           {repeat.map((gods)=>{
                            return(
                                <div className='gods_images' onClick={()=>{setCommands(gods.name)}}>
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
                                        <img src={teamB.image} alt="..."/>
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
