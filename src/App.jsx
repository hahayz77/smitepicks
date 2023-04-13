
import './App.css';
import { Team } from './components/Team';
import { Gods } from './components/Gods';
import { useStateContext } from "./context/StateContext";

function App() {        
    
    const { commands, commandIndex, MainScript, teamA, teamB, bansA, bansB, godsArray } = useStateContext();

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
                        <Team team={teamA} bans={bansA} name={"teamA"}/>
                        <Gods godsArray={godsArray}/>
                        <Team team={teamB} bans={bansB} name={"teamB"}/>
                </div>
        </div>

    </>
  );
}

export default App;
