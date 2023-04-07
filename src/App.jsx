
import { useState } from 'react';
import './App.css';
import { TeamA } from './components/Team';
import { Verification } from './functions/Verification';
import { PickImageGod } from './functions/PickImageGod';

function App() {
    const fetchData = [
        {name: "Battleworn" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/T_Achilles_Battleworn_Icon.png"},
        {name: "DeathKnight" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/9b/T_Achilles_DeathKnight_Icon.png"},
        {name: "Demon" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/67/T_Achilles_Demon_Icon.png"},
        {name: "KnightOfMordred" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/62/T_Achilles_KnightOfMordred_Icon.png"},
        {name: "WhiteHot" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/07/T_Agni_WhiteHot_Icon.png"},
        {name: "DarkAngel" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/44/T_AhMuzenCab_DarkAngel_Icon.png"},
        {name: "BlackGold" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a6/T_Amaterasu_BlackGold_Icon.png"},
        {name: "AnimeMaid" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/4b/T_Amaterasu_AnimeMaid_Icon.png"},
        {name: "CCSkin" , banished: false, picked: [], image: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/7e/T_Amaterasu_CCSkin_Icon.png"}
    ];

    const commands = [
        'Click select to start the picks! ⚫',
        '1º BAN 🔵',
        '1º BAN 🔴',
        '1º PICK 🔵',
        '1º PICK 🔴',
        '2º BAN 🔵',
        '2º BAN 🔴',
        '2º PICK 🔵',
        '2º PICK 🔴',
        'DONE! 🟢'
    ];
    const [commandIndex, setCommandIndex] = useState(0);
    const [godsArray, setGodsArray] = useState(fetchData);
    const [selectedGod, setSelectedGod] = useState();
    const [teamA, setTeamA] = useState([{},{}]);
    const [teamB, setTeamB] = useState([{},{}]);
    const [bansA, setBansA] = useState([{},{}]);
    const [bansB, setBansB] = useState([{},{}]);
    const lastCommand = commands.length-1;

    function MainScript(){
        if(commandIndex === 0) { // click select to start picking
            setCommandIndex(commandIndex+1);
            return;
        }
        if(commandIndex === lastCommand) return; // Do it when its done!

        if(!selectedGod) { // no selected God
            alert("You should select a God!");
            return;
        }

        if(selectedGod.banished === true){ // if the selected god is banished
            alert("This god was banished");
            return;
        }
        console.log(selectedGod);
        PickImageGod(selectedGod, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB);  // updates the useState obj
        // let validation = Verification(); // test the Bans and the Picks from the sequence
        let validation = true;
        if(validation === false) { // verify if all logic is ok!
            alert("Already Banished or picked!");
            setSelectedGod();   // Updates the useState obj
            return;
        } else{
            setCommandIndex(commandIndex+1);    // increase the variable to set the next one for the sequence;     
        }
        
    }
   
        
  return (
    <>
        <div className="App">
                <div id='title'>
                    <h1 className='title_section'>Smite Picks</h1>
                    <div id='playercommands'>
                        <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                        <span>  {commands[commandIndex]}</span>
                    </div>
                </div>
                <div id='maincontent' className="fluid-container">
                    {console.log(bansA)}
                        <TeamA team={teamA} bans={bansA} name={"teamA"}/>
                        <div id="gods" className='bg-dark col'>
                           {godsArray.map((god)=>{
                            return(
                                <div className='gods_wrapper' onClick={()=>{PickImageGod(selectedGod, setSelectedGod, commandIndex, bansA, setBansA, bansB, setBansB, teamA, setTeamA, teamB, setTeamB)}}>
                                    <span>{god.name}</span>
                                    <img src={god.image} alt={god.name} />
                                    {god.banished === true ? <span>Banished</span> : null}
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
