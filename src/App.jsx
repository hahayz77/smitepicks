
import { useState } from 'react';
import './App.css';
import { TeamA } from './components/Team';

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
        '1 Bans TA',
        '1 Bans TB',
        '1 PICK TA',
        '1 PICK TB',
        '2 BAN TA',
        '2 BAN TB',
        '2 PICK TA',
        '2 PICK TB',
    ];
    const [commandIndex, setCommandIndex] = useState(0);
    const [god, setGod] = useState();
    const [teamA, setTeamA] = useState([{},{}]);
    const [teamB, setTeamB] = useState([{},{}]);
    const [bansA, setBansA] = useState([{},{}]);
    const [bansB, setBansB] = useState([{},{}]);
    const [allBans, setAllBans] = useState();
    const [pass, setPass] = useState(true);

    function MainScript(){
        if(!god){
            alert("You should select a God!");
            return;
        }
        
        PickImageGod(god);  // updates the useState obj
        Verification(god, commandIndex); // test the Bans and the Picks from the sequence
        if(pass === false) {
            alert("Already Banished or picked!");
            setPass(true); // Reset pass variable for next tests
            return;
        }
        
        setCommandIndex(commandIndex+1);    // increase the variable to set the next one for the sequence
        setGod();   // Updates the useState obj
    }
    
    function Verification(godSelected, commandIndex, testBans){
        testBans = undefined;
        testBans = allBans?.find(e => e.name === godSelected.name);
        // if(commandIndex === 6) testPicksA.find(e => e.name === godSelected.name);
        // if(commandIndex === 7) testPicksB.find(e => e.name === godSelected.name);
        if(testBans) setPass(false);
        setAllBans([...bansA, ...bansB]);
    }
    
    function PickImageGod(god){
        setGod(god);
        if(commandIndex === 0) setBansA([god, {}])
        if(commandIndex === 1) setBansB([god, {}])
        if(commandIndex === 2) setTeamA([god, {}])
        if(commandIndex === 3) setTeamB([god, {}])
        if(commandIndex === 4) setBansA([bansA[0], god])
        if(commandIndex === 5) setBansB([bansB[0], god])

        // setTeamA([teamA[0], god]);
    }
   
        
  return (
    <>
        <div className="App">
                <div id='title'>
                    <h1 className='title_section'>Smite Picks</h1>
                    <div id='playercommands'>
                        {commands[commandIndex]}
                        <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                    </div>
                </div>
                <div id='maincontent' className="fluid-container">
                        <TeamA team={teamA} bans={bansA} name={"teamA"}/>
                        <div id="gods" className='bg-dark col'>
                           {fetchData.map((god)=>{
                            return(
                                <div className='gods_images' onClick={()=>{PickImageGod(god)}}>
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
