import './App.css';

function App() {
  return (
    <div className="App bg-danger">
            <div id='title' className="container">
                <h1>Smite Picks</h1>
            </div>
            <div id='playercommands' className="fluid-container bg-success">
                commands player
            </div>
            <div id='maincontent' className="fluid-container">
                <div className="row">
                    <div id="team1" className='bg-primary col'>
                        <div className="row">
                            <div className="img_container">
                                <img src="https://webcdn.hirezstudios.com/smite/god-cards/ares.jpg" alt="..."/>
                            </div>
                           <p> Player 1 T1</p>
                        </div>
                        <div className="row">
                            <p>Player 2 T1</p>
                        </div>
                        <div className="row">
                            <p>BANS</p>
                        </div>
                    </div>
                    <div id="gods" className='bg-primary col'>
                        gods
                    </div>
                    <div id="team2" className='bg-primary col'>
                        team2
                    </div>
                </div>
                
            </div>
    </div>
  );
}

export default App;
