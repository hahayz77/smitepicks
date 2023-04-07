
import { useEffect, useState } from 'react';
import './App.css';
import { TeamA } from './components/Team';
import { Verification } from './functions/Verification';
import { PickImageGod } from './functions/PickImageGod';

function App() {
    const fetchData = [
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

    const commands = [
        'Select to start the picks!',
        '1º BAN',
        '1º BAN',
        '1º PICK',
        '1º PICK',
        '2º BAN',
        '2º BAN',
        '2º PICK',
        '2º PICK',
        'DONE!'
    ];
    const [commandIndex, setCommandIndex] = useState(0);
    const [god, setGod] = useState();
    const [teamA, setTeamA] = useState([{},{}]);
    const [teamB, setTeamB] = useState([{},{}]);
    const [bansA, setBansA] = useState([{},{}]);
    const [bansB, setBansB] = useState([{},{}]);
    const [allBans, setAllBans] = useState([]);
    const [pass, setPass] = useState(true);
    const [playerSelector, setPlayerSelector] = useState();
    const lastCommand = commands.length-1;

    useEffect(()=>{
        if(commandIndex === 0) setPlayerSelector("⚫");
        else if(commandIndex === lastCommand) setPlayerSelector("🟢");
        else if((commandIndex % 2) === 0) setPlayerSelector("🔴");
        else setPlayerSelector("🔵");
    },[commandIndex])

    function MainScript(){
        if(commandIndex === 0) { // click select to start picking
            setCommandIndex(commandIndex+1);
            return;
        }
        if(commandIndex === lastCommand) return;

        if(!god) {
            alert("You should select a God!");
            return;
        }
        
        PickImageGod(god, setGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB);  // updates the useState obj
        Verification(god, commandIndex, setPass, allBans, setAllBans, bansA, bansB); // test the Bans and the Picks from the sequence
        
        if(pass === false) {
            alert("Already Banished or picked!");
            setPass(true); // Reset pass variable for next tests
            return;
        }
        
        setCommandIndex(commandIndex+1);    // increase the variable to set the next one for the sequence
        setGod();   // Updates the useState obj
    }
   
        
  return (
    <>
        <div className="App">
                <div id='title'>
                    <h1 className='title_section'>Smite Picks</h1>
                    <div id='playercommands'>
                        <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                        <span>  {commands[commandIndex]}</span>
                        <span> {playerSelector} </span>
                    </div>
                </div>
                <div id='maincontent' className="fluid-container">
                        <TeamA team={teamA} bans={bansA} name={"teamA"}/>
                        <div id="gods" className='bg-dark col'>
                           {fetchData.map((god)=>{
                            return(
                                <div className='gods_wrapper' onClick={()=>{PickImageGod(god, setGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB)}}>
                                    <span>{god.name}</span>
                                    <img src={god.image} alt={god.name} />
                                </div>   
                            )
                           })}
                        </div>
                        <TeamA team={teamB} bans={bansB} name={"teamB"}/>
                </div>
        </div>

    </>
  );
}

export default App;
