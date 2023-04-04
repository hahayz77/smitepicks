
import { useState } from 'react';
import './App.css';

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
    let pass = true;
    
    
    function Verification(godSelected, commandIndex, testBans, allBans, testPicksA, testPicksB){
        testBans = undefined;
        allBans = [...bansA, ...bansB];
        testPicksA = teamA;
        testPicksB = teamB;
        testBans = allBans.find(e => e.name === godSelected.name);
        if(commandIndex === 6) testPicksA.find(e => e.name === godSelected.name);
        if(commandIndex === 7) testPicksB.find(e => e.name === godSelected.name);
        console.log(godSelected, commandIndex, allBans, testPicksA, testPicksB, bansA, bansB, allBans);
        // if(testBans) pass = false;
        
        // if(!test){
        //     pass = false;
        // }
        // console.log(godSelected);
        // console.log(bansA.find(e => e.name == godSelected.name));
        // console.log(bansB.find(e => e.name == godSelected.name));
        // test = bansA.find(e => e.name == godSelected.name);
        // if(bansA.find(e => e === godSelected)){
        //     console.log("BANISHED") 
        // }

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

    function MainScript(){
        if(!god){
            alert("You should select a God!");
            return;
        }
        
        PickImageGod(god);  // updates the useState obj
        Verification(god, commandIndex); // test the Bans and the Picks from the sequence
        if(!pass) {
            alert("Already Banished or picked!")
            return;
        }
        
        setCommandIndex(commandIndex+1);    // increse the variable to set the next one for the sequence
        setGod();   // Updates the useState obj

    }

   
        
  return (
    <>
        <div className="App">
                <div id='title' className="container">
                    <h1 className='title_section'>Smite Picks</h1>
                </div>
                <div id='playercommands' className="fluid-container bg-success">
                    {commands[commandIndex]}
                    <button className='btn btn-primary' onClick={()=>{MainScript()}}>Select</button>
                </div>
                <div id='maincontent' className="fluid-container">
                        <div id="team1" className=''>
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
                           {fetchData.map((god)=>{
                            return(
                                <div className='gods_images' onClick={()=>{PickImageGod(god)}}>
                                    {god.name}
                                    <img src={god.image} alt={god.name} />
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

    </>
  );
}

export default App;
